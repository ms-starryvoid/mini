function add30Days(date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 30);
    return newDate;
}
function getPreviousMonthStartDate() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Set the date to the first day of the current month
  const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);

  // Subtract 1 month to get the previous month
  const previousMonthStartDate = new Date(firstDayOfCurrentMonth);
  previousMonthStartDate.setMonth(previousMonthStartDate.getMonth() - 1);

  return previousMonthStartDate;
}

function getPreviousMonthEndDate() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Set the date to the first day of the current month
  const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);

  // Subtract 1 day from the first day of the current month to get the end date of the previous month
  const previousMonthEndDate = new Date(firstDayOfCurrentMonth);
  previousMonthEndDate.setDate(previousMonthEndDate.getDate() - 1);

  return previousMonthEndDate;
}
  
  
  const scheduler = async(req,res) =>{
      try{
        const previousMonthStartDate = getPreviousMonthStartDate();
    const previousMonthEndDate = getPreviousMonthEndDate();
    const previousMonthVisits = await visitModel.find({
      day: { $gte: previousMonthStartDate, $lte: previousMonthEndDate },
    });

    // Step 2: Generate new visit dates for the next month
    const nextMonthVisits = previousMonthVisits.map((visit) => {
      const visitDate = add30Days(visit.day); // Custom function to add 30 days to a date
      return { visitDate, patientId: visit.patient_id, ashaId: visit.asha_id };
    });
    for (const visit of nextMonthVisits) {
        const { visitDate, patientId, ashaId } = visit;
  
        // Create a new visit document
        const newVisit = new visitModel({
          patient_id: patientId,
          asha_id: ashaId,
          day: visitDate,
          report: {
            blood_sugar: null,
            blood_pressure: null,
            remarks: null
          }
        });
  
        // Save the new visit to the database
         await newVisit.save();
        
      }
  
    // Step 3: Retrieve the list of patients and asha IDs
    const patientIds = visit.map((visit) => visit.patient_id);
    const ashaIds = visit.map((visit) => visit.asha_id);
    const patients = await patientModel.find({ patient_id: { $in: patientIds } });
    const ashas = await ashaModel.find({ asha_id: { $in: ashaIds } });
    // Step 4: Send the schedule and allow user adjustments in the frontend
    res.status(200).json({
      schedule: nextMonthVisits,
      patients,
      ashas,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

      }

      const todayvisit =async(req,res)=>{
        try {
          
    const currentDate = new Date();
    const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const currentMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Fetch visits for today
    const visitsForToday = await visitModel.find({ day: currentDate });

    // Fetch visits for the current month
    const visitsForCurrentMonth = await visitModel.find({
      day: { $gte: currentMonthStart, $lte: currentMonthEnd },
    });

    // Extract patient names from the fetched visits
    const patientsForToday = visitsForToday.map((visit) => visit.patient_id);
    const patientsForCurrentMonth = visitsForCurrentMonth.map((visit) => visit.patient_id);

    // You can also fetch additional patient details here if needed

    res.status(200).json({
      today: patientsForToday,
      currentMonth: patientsForCurrentMonth,
    });
 
    
  


        } catch (error) {
          res.status(500).json({ error: "Internal server error" });
        }
      }
  module.exports={scheduler,todayvisit}