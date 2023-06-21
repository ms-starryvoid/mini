const PDFDocument = require('pdfkit');

const visits = async(req,res)=>{
    try {
        const {patient_id} = req.query
    const dates = await visitModel.find({patient_id:patient_id},'day')
    res.status(200).json(dates)
    } catch (error) {
        console.log(error)
    }
}
const reportgen= async (req, res) => {
  const { patient_id, visitDate } = req.body;

  try {
    // Fetch patient details
    const patient = await patientModel.findOne({ patient_id: patient_id });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Fetch visit details
    const visit = await visitModel.findOne({ patient_id: patient_id, day: visitDate });
    if (!visit) {
      return res.status(404).json({ error: 'Visit not found' });
    }

    // Create a new PDF document
    const doc = new PDFDocument();

    // Set response headers for PDF
    res.setHeader('Content-Disposition', `attachment; filename=${patient_id}_${visitDate}_report.pdf`);
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe the PDF document to the response stream
    doc.pipe(res);

    // Add patient details to the PDF
    doc.fontSize(14).text('Patient Details:');
    doc.fontSize(12).text(`Name: ${patient.name}`);
    doc.fontSize(12).text(`Age: ${patient.age}`);
    doc.moveDown();

    // Add visit details to the PDF
    doc.fontSize(14).text('Visit Details:');
    doc.fontSize(12).text(`Visit Date: ${visitDate}`);
    doc.fontSize(12).text(`Blood Sugar: ${visit.report.blood_sugar}`);
    doc.fontSize(12).text(`Blood Pressure: ${visit.report.blood_pressure}`);
    doc.fontSize(12).text(`Remarks: ${visit.report.remarks}`);

    // Finalize the PDF and end the response
    doc.end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
 module.exports= reportgen
