
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
     
      <main className=" bg-[#030b16] text-white pt-24 px-6 pb-12"id='contact'>
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact Information</h2>

          <div className="bg-[#101827] p-8 rounded-lg shadow text-left space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500" />
              <span className="text-gray-300">+20 122 875 9645</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500" />
              <span className="text-gray-300">ahmedmahmoud0929@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="text-gray-300">Alexandria, Egypt</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/ahmed-mahmoud-793778226"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/ahmed-mahmoud-793778226
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
