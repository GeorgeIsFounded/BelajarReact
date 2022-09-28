import React from "react";

export default function TahunTerbit({ tahun, error = false, ...props }) {
  return (
    <div className="flex flex-col relative">
      <input
        {...props}
        id={tahun}
        className={` ${error ? "border-red-300 border-2" : ""
          } border w-full rounded-md px-2 py-1`}
      />
      {error && (
        <p className="text-red-500 text-sm italic ">wajib diisi tahun Terbitnya</p>
      )}
    </div>
  )
}