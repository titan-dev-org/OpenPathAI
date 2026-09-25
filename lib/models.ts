export type AIModel = {
  id: string;
  name: string;
  description: string;
  task: string;
  params: string;
  precision: string;
  domain?: string;
  tags: string[];
  hfUrl: string;
};

export const models: AIModel[] = [
  {
    id: "orbit-3-vl-flash",
    name: "Orbit 3 VL Flash",
    description:
      "Model AI text generation dengan 4 miliar parameter dan presisi FP32, dilatih khusus untuk domain hukum Indonesia.",
    task: "Text Generation",
    params: "4B",
    precision: "FP32",
    domain: "Hukum Indonesia",
    tags: ["text-generation", "fp32", "legal", "indonesian"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-3-VL-Flash",
  },
  {
    id: "orbit-3-8b-llama-thinking",
    name: "Orbit 3 8B Llama Thinking",
    description:
      "Model text generation dengan 8 miliar parameter dan presisi FP16, dilatih khusus untuk domain cyber security.",
    task: "Text Generation",
    params: "8B",
    precision: "FP16",
    domain: "Cyber Security",
    tags: ["text-generation", "fp16", "cyber-security", "reasoning"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-3-8B-Llama-thinking",
  },
  {
    id: "orbit-1-2-image",
    name: "Orbit 1.2 Image",
    description:
      "Model AI image-to-image dengan 900 juta parameter untuk transformasi dan modifikasi gambar.",
    task: "Image-to-Image",
    params: "900M",
    precision: "—",
    tags: ["image-to-image", "vision", "generation"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-1.2-image",
  },
  {
    id: "orbit-0-2b-2837",
    name: "Orbit 0.2B 2837",
    description:
      "Model bahasa ringan 0.2B dengan arsitektur GPT-2. Model ini merupakan hasil eksperimen sehingga tidak disarankan untuk digunakan dalam mengambil keputusan atau menyelesaikan suatu masalah.",
    task: "Text Generation",
    params: "0.2B",
    precision: "—",
    tags: ["tiny", "edge", "text-generation", "efficient"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-0.2B-2837",
  },
];

export const HF_ORG_URL = "https://huggingface.co/OpenPathAI";
export const GITHUB_URL = "https://github.com/OpenPathAI";
