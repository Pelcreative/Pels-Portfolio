import React from "react";

const services = [
  {
    title: "Frontend",
    items: [
      "Captivating UI Design: Create engaging interfaces.",
      "Flawless Frontend Development: Implement designs seamlessly.",
      "Lightning-Fast Performance: Optimize for speed and responsiveness.",
      "Inclusive Accessibility: Ensure accessibility for all users.",
      "Collaborative Excellence: Drive success through teamwork and communication.",
    ],
  },
  {
    title: "Backend",
    items: [
      "Database Management: Efficiently handle data storage and retrieval.",
      "API Development: Build scalable and secure APIs.",
      "Performance Optimization: Fine-tune for speed and reliability.",
      "Security Implementation: Ensure strong backend security.",
      "Reliable Software Delivery: Maintain consistent deployment pipelines.",
    ],
  },
  {
    title: "Hosting",
    items: [
      "Reliable Hosting: Secure and dependable website hosting.",
      "Scalable Infrastructure: Flexible resources for changing demands.",
      "Performance Monitoring: Constantly optimize for speed and uptime.",
      "Security Measures: Strong protection against cyber threats.",
      "24/7 Support: Always available for assistance.",
    ],
  },
];

export default function Services() {
  return (
    <section id="service" className="w-full py-20 bg-[#0a192f] text-white">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h3 className="text-sm text-gray-300 tracking-widest">What I Offer</h3>
        <h2 className="text-3xl font-bold mt-2">Services</h2>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#141f33]/60 p-6 rounded-xl backdrop-blur border border-white/5 shadow-xl"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#1B243A] to-[#0F1526] p-4 rounded-xl mb-5 shadow-lg">
              <h3 className="text-center font-semibold text-lg">{service.title}</h3>
            </div>

            {/* Bullet List */}
            <ul className="space-y-3 text-gray-300">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg">✓</span>
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}
