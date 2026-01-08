function Careers() {
  const actualJobs = [
    {
      title: "Senior Firmware Engineer",
      experience: "5-8 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Design and develop embedded firmware for IoT devices, RTOS-based systems, and real-time applications. Experience with ARM processors, BSP development, and low-level programming required.",
      skills: ["C/C++", "RTOS", "ARM", "Embedded Systems", "Device Drivers"]
    },
    {
      title: "SoC Validation Engineer",
      experience: "4-8 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Lead validation and verification activities for complex SoC designs. Develop test plans, execute validation suites, and debug hardware-software integration issues.",
      skills: ["SoC Validation", "SystemVerilog", "UVM", "Python", "Debugging"]
    },
    {
      title: "AI/ML Systems Engineer",
      experience: "3-6 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Design and implement AI/ML systems for edge devices and cloud platforms. Work on model optimization, quantization, and deployment of neural networks on embedded hardware.",
      skills: ["Python", "TensorFlow/PyTorch", "Edge AI", "Model Optimization", "Embedded Systems"]
    }
  ];

  const placeholderJobs = Array.from({ length: 20 }, (_, i) => ({
    title: `Engineering Position ${i + 4}`,
    experience: "TBD",
    location: "Bangalore",
    type: "Full-time",
    description: "We are continuously looking for talented engineers. Send your resume and we'll reach out when a matching opportunity arises.",
    skills: []
  }));

  const allJobs = [...actualJobs, ...placeholderJobs];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Careers at RTLYNX</h1>
        <p className="mt-4 text-gray-700">Join a purpose-driven engineering team shaping the future of semiconductor and high-technology products.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Why work with us</h4>
            <p className="text-sm text-gray-600 mt-2">Purpose-led engineering, chip-to-cloud work, ownership and growth.</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Benefits</h4>
            <p className="text-sm text-gray-600 mt-2">Learning opportunities, leadership accessibility, flexible policies.</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Apply</h4>
            <p className="text-sm text-gray-600 mt-2">Send your resume to <a href="mailto:career@rtlynx.com" className="text-green-600">career@rtlynx.com</a></p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Open Positions</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {allJobs.map((job, index) => (
              <div key={index} className={`p-4 border rounded hover:shadow-lg transition-all duration-300 ${index < 3 ? 'bg-white' : 'bg-gray-50 opacity-75'}`}>
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.experience} • {job.location} • {job.type}</p>
                <p className="text-sm text-gray-600 mt-2">{job.description}</p>
                {job.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                )}
                <a href="mailto:career@rtlynx.com" className="text-sm text-green-600 inline-block mt-3 hover:underline">
                  {index < 3 ? 'Apply →' : 'Express Interest →'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
