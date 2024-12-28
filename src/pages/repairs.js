import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Repairs() {
  const services = [
    {
      title: "Auto Glass Repair",
      description:
        "Convenient windshield auto glass repair and replacement services. We use only the highest quality auto glass and sealants to ensure your new windshield performs as expected. Certified technicians offer same-day or next-day service.",
    },
    {
      title: "Paintless Dent Repair",
      description:
        "Cost-effective solutions for minor dents and dings. Our paintless dent repair services save you money while maintaining the value of your vehicle.",
    },
    {
      title: "Lifetime Warranty",
      description:
        "Receive a written lifetime warranty for all services performed. We stand behind our work, guaranteeing free corrections for any defects in workmanship.",
    },
    {
      title: "Car Rentals",
      description:
        "While we do not have rental vehicles on-site, we gladly assist customers with rentals through our trusted partners to ensure your convenience.",
    },
    {
      title: "Towing Service",
      description:
        "Stranded? We offer 24-hour towing to our facility, working with trusted towing companies in the Houston area to better serve you.",
    },
    {
      title: "Frame and Mechanical Repairs",
      description: `Our high-end frame system ensures your vehicle's mechanical points are restored to factory specifications with computerized accuracy. 
      
      - Uppermost quality equipment used 
      - Replacement crash repair parts 
      - Auto body paint and supplies 
      
      We also handle all collision-related mechanical repairs in-house, ensuring quality service and precision.`,
    },
  ];

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What are your store operating hours?",
          answer: "Monday - Friday: 8 AM to 6 PM\nSaturday: 9 AM to 2 PM (By Appointment Only)",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept payment by debit, check, and all major credit cards.",
        },
      ],
    },
    {
      category: "Collision Repair",
      questions: [
        {
          question: "Does Elegant Collision do hail damage repair?",
          answer: "Yes. Please contact us at 832-661-0390.",
        },
        {
          question: "Does Elegant Collision offer PDR / Paintless Dent Repair?",
          answer: "Yes. We are proud to offer Paintless Dent Repair (PDR) at Elegant Collision. This service is a great alternative to traditional auto body repair and can save you time and money.",
        },
        {
          question: "Does Elegant Collision do mechanical work?",
          answer: "Only if it’s collision-related mechanical work, due to an accident. General mechanical services, such as replacing a transmission or a tune-up, are not our specialty.",
        },
        {
          question: "How do I schedule a collision repair estimate?",
          answer: "Please call us at 832-661-0390 for assistance.",
        },
        {
          question: "Will you help me file my insurance claim?",
          answer: "Yes. We are experienced at dealing with insurance paperwork and insurance companies. We will assist you every step of the way.",
        },
        {
          question: "Do you offer repair estimates on Saturdays?",
          answer: "Yes. To arrange your repair estimate, please call 832-661-0390.",
        },
      ],
    },
    {
      category: "Auto Glass",
      questions: [
        {
          question: "How much will my insurance cover for auto glass service?",
          answer:
            "Auto glass repair and replacement is covered under your automobile’s comprehensive policy. You will only be responsible for your deductible, which will be collected at the time of service.",
        },
        {
          question: "How do I schedule an auto glass / windshield service appointment?",
          answer: "Please call us at 832-661-0390 for assistance.",
        },
        {
          question: "Do you use OEM quality glass?",
          answer: "Yes, we use only the highest quality glass and adhesives for your vehicle.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl text-red-500 mb-8">Our Repair Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Card key={index} title={service.title} description={service.description} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl text-red-500 mb-8">FAQs</h2>
          <p className="text-lg mb-5">
            Please review our FAQs for answers to common questions about our services. For additional information, our customer service representatives are available at 832-661-0390.
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{faq.category}</h3>
              <ul className="list-disc list-inside">
                {faq.questions.map((q, idx) => (
                  <li key={idx} className="mb-3">
                    <strong>{q.question}</strong>
                    <p className="ml-4 mt-1">{q.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
