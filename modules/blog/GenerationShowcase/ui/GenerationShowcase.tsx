'use client';
import { Icons } from "@/components/icons";
// import { generateImage } from "../api/generate.api"
// import { uploadImage } from "../api/upload.api"
// import { getStatus } from "../api/generate.api"


import { useState } from "react";

import Dropzone from 'react-dropzone'

export const GenerationShowcase = () => {
    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
    };

    return (
        <div className="w-full h-36 border border-[rgba(255,255,255,0.3)] my-20 bg-[#0b0b09] rounded-xl overflow-hidden">
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <div className="w-full h-full flex justify-center items-center" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="text-muted cursor-pointer">Upload a file</p>
                    </div>
                )}
            </Dropzone>
        </div>
    )
}
