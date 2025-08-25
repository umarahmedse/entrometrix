
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Case Study - Entrometrix",
  description: "Detailed analysis of our successful projects and client solutions",
  metadataBase: new URL("https://entrometrix.ai"),
  alternates: {
    canonical: "/case-study",
  },
};

export default function CaseStudyPage() {
  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-4xl font-bold text-center mb-8">Case Study Title</h1>
      
      {/* Placeholder for your content */}
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-12">
          This is a placeholder for your case study content. You can replace this with your actual case study text, images, and data visualizations.
        </p>
        
       
      </div>
    </div>
  );
}