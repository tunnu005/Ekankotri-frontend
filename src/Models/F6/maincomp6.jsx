'use client'

import { useState, useEffect } from 'react';
import image from '../../../public/16.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Maincomp6() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-serif">
      {isClient && (
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto px-4 py-16 space-y-24"
        >
          {/* Header */}
          <motion.header variants={fadeInUp} className="text-center space-y-4">
            <h1 className="text-6xl font-bold text-white">Priya & Rahul</h1>
            <p className="text-xl text-gray-300">Request the pleasure of your company at their wedding celebration</p>
          </motion.header>

          {/* Couple's Story */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-4xl font-semibold text-center text-white">Our Story</h2>
            <p className="text-lg text-center text-gray-300">
              Two souls intertwined by destiny, Priya and Rahul's journey began with a chance encounter at a mutual
              friend's gathering. Their shared love for travel and culinary adventures sparked a connection that
              blossomed into a beautiful relationship. After three years of laughter, growth, and creating cherished
              memories together, they are ready to embark on their greatest adventure yet - a lifetime of love and
              companionship.
            </p>
          </motion.section>

          {/* Couple's Photo */}
          <motion.div variants={fadeInUp} className="relative h-96 rounded-lg overflow-hidden">
            <img src={image} alt="" 
                className="w-full h-full object-cover"
  
            />
          </motion.div>

          {/* Events */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl font-semibold text-center text-white">Wedding Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Mehendi Ceremony', date: 'August 15, 2024', time: '4:00 PM onwards' },
                { name: 'Sangeet Night', date: 'August 16, 2024', time: '7:00 PM onwards' },
                { name: 'Wedding Ceremony', date: 'August 17, 2024', time: '11:00 AM onwards' },
                { name: 'Reception', date: 'August 18, 2024', time: '7:00 PM onwards' }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border border-gray-700 p-6 rounded-lg text-center space-y-4 bg-gray-800"
                >
                  <h3 className="text-2xl font-semibold text-white">{event.name}</h3>
                  <p className="text-gray-300">{event.date}</p>
                  <p className="text-gray-300">{event.time}</p>
                  <Button  className="mt-2">
                    Add to Calendar
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Invited By */}
          <motion.section variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-white">Invited By</h2>
            <p className="text-lg text-gray-300">
              Mr. & Mrs. Sharma
              <br />
              (Parents of the Bride)
            </p>
            <p className="text-lg text-gray-300">
              Mr. & Mrs. Patel
              <br />
              (Parents of the Groom)
            </p>
          </motion.section>

          {/* Map */}
          <motion.section variants={fadeInUp} className="space-y-4">
          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Venue Location</h2>
            <div className="h-64 md:h-96 rounded-lg overflow-hidden">
              <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[28.6139, 77.2090]}>
                  <Popup>
                    Wedding Venue <br /> New Delhi, India
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={fadeInUp} className="text-center text-sm text-gray-400">
            <p>We look forward to celebrating our special day with you!</p>
          </motion.footer>
        </motion.div>
      )}
    </div>
  );
}
