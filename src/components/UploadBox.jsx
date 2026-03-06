import { useState } from "react"

function UploadBox({ setImage }) {

  const handleChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  return (
    <div className="w-full max-w-md">
      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-800/50 hover:border-blue-500/50 transition-all group">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-10 h-10 mb-3 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="mb-2 text-sm text-slate-400 group-hover:text-slate-200"><span className="font-bold text-blue-400">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-slate-500 uppercase tracking-tighter">PNG, JPG or WebP (MAX. 5MB)</p>
        </div>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </div>
  )
}

export default UploadBox