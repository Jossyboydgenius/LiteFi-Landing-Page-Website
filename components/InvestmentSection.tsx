"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Settings, Lock } from "lucide-react"
import image1 from "@/assets/images/image1.png"
import invest1 from "@/assets/images/invest1.png"
import { m } from "@/components/AnimationProvider"

export default function InvestmentSection() {
  return (
    <section className="bg-white text-black section-padding section-overflow-control">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-8 xs:gap-6 items-center">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-title-red mb-4">WHY CHOOSE LITEFI INVESTMENT?</div>
            <h2 className="heading-secondary text-black mb-6">Earn Up to 30% Returns on Your Investments.</h2>
            <p className="text-gray-600 mb-8 sm:mb-6">
              Take control of your financial future with LiteFi's smart and secure investment options. Watch your money
              grow faster with potential returns of up to 30% per year. We offer flexible investment plans to help you
              reach your financial goals, whether it's short-term or long-term wealth building.
            </p>

            <m.div
              className="space-y-6 sm:space-y-4 mb-8 sm:mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              <m.div 
                className="flex items-start sm:items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <m.div 
                  className="bg-black circle-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 mr-4 sm:mr-5 md:mr-6 flex-shrink-0"
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                </m.div>
                <div>
                  <h3 className="font-bold">Flex Investment:</h3>
                  <p className="text-sm text-gray-600">
                    Enjoy the freedom of free withdrawals while earning high interest.
                  </p>
                </div>
              </m.div>

              <m.div 
                className="flex items-start sm:items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <m.div 
                  className="bg-black circle-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 mr-4 sm:mr-5 md:mr-6 flex-shrink-0"
                  whileHover={{ scale: 1.08, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                </m.div>
                <div>
                  <h3 className="font-bold">Goal Investment:</h3>
                  <p className="text-sm text-gray-600">
                    Set specific financial goals and save consistently with attractive returns.
                  </p>
                </div>
              </m.div>
            </m.div>
            
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white no-radius px-8 py-3 h-auto text-base font-medium w-48">
                Get Started
              </Button>
            </m.div>
          </m.div>

          <m.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Stacked Images */}
            <div className="relative h-[480px] sm:h-[400px] xs:h-[300px] overflow-hidden">
              <m.div 
                className="absolute right-0 bottom-20 w-[90%] z-10"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src={invest1}
                  alt="Investment 1"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </m.div>
              <m.div 
                className="absolute left-0 bottom-0 w-[35%] z-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src={image1}
                  alt="Investment 2"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
