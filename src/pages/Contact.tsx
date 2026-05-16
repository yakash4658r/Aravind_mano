import React from "react";
import { PageHero } from "../components/PageHero";
import { PLACEHOLDERS } from "../data/siteData";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Contact Us"
        breadcrumb="Contact Us"
        subtitle="We are here to help you with your gastrointestinal health needs."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0e5872] mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Have questions about a procedure or need to schedule a consultation? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#de1c21]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#0e5872] flex items-center justify-center flex-shrink-0 group-hover:bg-[#de1c21] transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0e5872] mb-1">Call Us</div>
                    <a href={`tel:${PLACEHOLDERS.PHONE}`} className="text-gray-600 hover:text-[#de1c21] transition-colors text-lg font-medium">
                      {PLACEHOLDERS.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#de1c21]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#0e5872] flex items-center justify-center flex-shrink-0 group-hover:bg-[#de1c21] transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0e5872] mb-1">Email Us</div>
                    <a href={`mailto:${PLACEHOLDERS.EMAIL}`} className="text-gray-600 hover:text-[#de1c21] transition-colors font-medium">
                      {PLACEHOLDERS.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#de1c21]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#0e5872] flex items-center justify-center flex-shrink-0 group-hover:bg-[#de1c21] transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0e5872] mb-1">Our Location</div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {PLACEHOLDERS.ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#de1c21]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#0e5872] flex items-center justify-center flex-shrink-0 group-hover:bg-[#de1c21] transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0e5872] mb-1">Consultation Hours</div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {PLACEHOLDERS.WORKING_HOURS}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#de1c21]/10 flex items-center justify-center text-[#de1c21]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0e5872]">Send us a Message</h3>
                </div>

                <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0e5872] focus:ring-1 focus:ring-[#0e5872] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your mobile number" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0e5872] focus:ring-1 focus:ring-[#0e5872] transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0e5872] transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Book an Appointment</option>
                      <option>Second Opinion</option>
                      <option>Surgery Query</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="How can we help you today?" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0e5872] focus:ring-1 focus:ring-[#0e5872] transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto bg-[#0e5872] text-white font-bold px-10 py-5 rounded-2xl hover:bg-[#de1c21] transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3">
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5866761048683!2d80.2223838!3d13.0673079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266858e7456d9%3A0xc486f0607908b8e0!2sAyyavoo%20Colony%2C%20Aminjikarai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  );
};
