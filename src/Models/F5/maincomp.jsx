'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
import image from '../../../public/16.png'
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function WeddingCard() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const events = [
    { name: 'Mehendi', date: '15th November 2023', time: '6:00 PM', venue: 'Radisson Blu' },
    { name: 'Sangeet', date: '16th November 2023', time: '7:00 PM', venue: 'Taj Palace' },
    { name: 'Wedding Ceremony', date: '17th November 2023', time: '11:00 AM', venue: 'Lotus Temple' },
    { name: 'Reception', date: '18th November 2023', time: '8:00 PM', venue: 'ITC Maurya' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100 p-4 md:p-8">
      <motion.div 
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 md:p-8 text-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-extrabold text-rose-600 mb-2"
            {...fadeInUp}
          >
            Priya & Rahul
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-4"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            invite you to celebrate their wedding
          </motion.p>
          <motion.p
            className="text-md md:text-lg text-gray-500 mb-6 md:mb-8 italic"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Together with their families
          </motion.p>
          <motion.div
            className="text-md md:text-lg text-gray-700 mb-6 md:mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <p>Mr. & Mrs. Sharma</p>
            <p>&</p>
            <p>Mr. & Mrs. Patel</p>
          </motion.div>
          
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           <img src={image} alt="" height={600} width={400} className="rounded-lg shadow-md mx-auto"/>
          </motion.div>

          <Separator className="my-6 md:my-8" />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            animate="animate"
          >
            {events.map((event, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-rose-600 mb-2">{event.name}</h3>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-600">{event.time}</p>
                    <p className="text-gray-600">{event.venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="my-6 md:my-8" />

          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-rose-600 mb-4">Venue Location</h2>
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

          <motion.div 
            className="mt-6 md:mt-8 text-gray-600"
            {...fadeInUp}
            transition={{ delay: 1 }}
          >
            <p>For any queries, please contact:</p>
            <p>+91 98765 43210</p>
            <p>priya.rahul.wedding@gmail.com</p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4"
            {...fadeInUp}
            transition={{ delay: 1.2 }}
          >
            <Button 
              onClick={() => setIsRsvpOpen(true)}
              className="bg-rose-600 hover:bg-rose-700 text-white"
            >
              RSVP Now
            </Button>
            <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-100">
              View Gallery
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isRsvpOpen && (
          <Dialog open={isRsvpOpen} onOpenChange={setIsRsvpOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>RSVP</DialogTitle>
                <DialogDescription>
                  Please confirm your attendance for our special day.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>RSVP form content goes here</p>
                {/* Add your RSVP form fields here */}
              </div>
              <Button onClick={() => setIsRsvpOpen(false)}>Close</Button>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
