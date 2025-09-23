'use client'

import React from 'react'
import { Heart } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Heart */}
        <div className="mb-8">
          <Heart className="w-16 h-16 text-emerald-400 fill-emerald-400 mx-auto animate-pulse" />
        </div>

        {/* Names */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">James & Anne</h1>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}
