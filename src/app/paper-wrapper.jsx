"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PaperWrapper = ({ children }) => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                >
                    {children}
                </motion.div>

            </AnimatePresence >
        </>
    )
}

export default PaperWrapper