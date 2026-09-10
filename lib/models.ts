export type AIModel = {
  id: string;
  name: string;
  description: string;
  task: string;
  params: string;
  downloads: string;
  likes: number;
  tags: string[];
  hfUrl: string;
  updated: string;
};

export const models: AIModel[] = [
  {
    id: "orbit-3-vl-flash",
    name: "Orbit 3 VL Flash",
    description:
      "Model vision-language cepat untuk memahami gambar, OCR, dan tanya-jawab visual dengan latensi rendah.",
    task: "Vision-Language",
    params: "3B",
    downloads: "—",
    likes: 0,
    tags: ["vision-language", "multimodal", "fast"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-3-VL-Flash",
    updated: "baru",
  },
  {
    id: "orbit-3-8b-llama-thinking",
    name: "Orbit 3 8B Llama Thinking",
    description:
      "Model bahasa 8B berbasis Llama dengan kemampuan reasoning & chain-of-thought untuk tugas kompleks.",
    task: "Text Generation",
    params: "8B",
    downloads: "—",
    likes: 0,
    tags: ["llama", "reasoning", "text-generation"],
    hfUrl:
      "https://huggingface.co/OpenPathAI/Orbit-3-8B-Llama-thinking",
    updated: "baru",
  },
  {
    id: "orbit-1-2-image",
    name: "Orbit 1.2 Image",
    description:
      "Model generatif text-to-image untuk ilustrasi, konsep art, dan desain visual dengan kontrol artistik.",
    task: "Text-to-Image",
    params: "—",
    downloads: "—",
    likes: 0,
    tags: ["diffusion", "text-to-image", "image-generation"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-1.2-image",
    updated: "baru",
  },
  {
    id: "yolo-detection-safety-equipment",
    name: "YOLO Detection — Safety Equipment",
    description:
      "Deteksi alat keselamatan kerja (helm, rompi, sarung tangan, dll.) menggunakan YOLO untuk industri & K3.",
    task: "Object Detection",
    params: "—",
    downloads: "—",
    likes: 0,
    tags: ["yolo", "object-detection", "safety", "industry"],
    hfUrl:
      "https://huggingface.co/OpenPathAI/YOLO-detection-safety-equipment",
    updated: "baru",
  },
  {
    id: "yolo-detection-vehicle-plate",
    name: "YOLO Detection — Vehicle Plate (2287)",
    description:
      "Deteksi pelat nomor kendaraan dengan dataset 2.287 gambar, cocok untuk sistem parkir & lalu lintas.",
    task: "Object Detection",
    params: "—",
    downloads: "—",
    likes: 0,
    tags: ["yolo", "object-detection", "license-plate", "anpr"],
    hfUrl:
      "https://huggingface.co/OpenPathAI/YOLO-detection-vehcile-plate-2287",
    updated: "baru",
  },
  {
    id: "orbit-0-2b-2837",
    name: "Orbit 0.2B 2837",
    description:
      "Model bahasa ringan 0.2B parameter, cocok untuk perangkat edge, mobile, dan inference on-device.",
    task: "Text Generation",
    params: "0.2B",
    downloads: "—",
    likes: 0,
    tags: ["tiny", "edge", "text-generation", "efficient"],
    hfUrl: "https://huggingface.co/OpenPathAI/Orbit-0.2B-2837",
    updated: "baru",
  },
];

export const HF_ORG_URL = "https://huggingface.co/OpenPathAI";
export const GITHUB_URL = "https://github.com/OpenPathAI";
