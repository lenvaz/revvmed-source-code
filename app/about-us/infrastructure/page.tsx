import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Infrastructure | ${APP_NAME}`,
  description: `Explore our state-of-the-art infrastructure and facilities at ${APP_NAME}.`,
}

const infrastructureImages = [
  { src: "/infrastructure/office-1.jpg", alt: "Modern Medical Reception Area" },
  { src: "/infrastructure/office-2.jpg", alt: "Conference Room with Advanced Technology" },
  { src: "/infrastructure/office-3.jpg", alt: "Collaborative Healthcare Workspace" },
  { src: "/infrastructure/office-4.jpg", alt: "Modern Medical Workstations" },
  { src: "/infrastructure/office-5.jpg", alt: "Healthcare Innovation Center" },
  { src: "/infrastructure/office-6.jpg", alt: "Medical Data Center" },
  { src: "/infrastructure/office-7.jpg", alt: "Staff Break Room" },
  { src: "/infrastructure/office-8.jpg", alt: "Healthcare Tech Hub" },
  { src: "/infrastructure/office-9.jpg", alt: "Medical Professional Lounge" },
  { src: "/infrastructure/office-10.jpg", alt: "Team Collaboration Space" },
  { src: "/infrastructure/office-11.jpg", alt: "Quiet Consultation Zone" },
  { src: "/infrastructure/office-12.jpg", alt: "Medical Research Lab" }
]

export default function InfrastructurePage() {
  return (
    <div className="w-full px-8 py-8">
      <h1 className="text-4xl font-bold mb-6">Infrastructure</h1>
      
      {/* <Card className="p-6 mb-8 bg-card/50 hover:bg-card/80 transition-colors duration-300 shadow-none border-none"> */}
        <p className="text-lg text-card-foreground">
          At {APP_NAME} we use the most modern HIPAA compliant infrastructure for our customers and team members across all locations. Our infrastructure uses latest cutting-edge cloud technologies that are upgraded regularly to ensure the highest implementation of security and privacy standards. Our implementations include Physical Safeguards (Biometric access control, CCTV monitoring, Special purpose-built computers etc.), technical safeguards (firewall, encrypted VPN, AES 256 encryption for communication, user level access control, anti virus etc.) and administrative safeguards (Contingency plan, disaster management, risk management, conductive risk assessment, etc.). We are located in Irvine (CA) and Ahmedabad (India).
        </p>
      {/* </Card> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructureImages.map((image, index) => (
          <Card key={index} className="overflow-hidden bg-card/50 hover:bg-card/80 transition-all duration-300 shadow-none border-none group">
            <div className="aspect-video relative">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* <Card className="mt-12 p-6 bg-card/50 hover:bg-card/80 transition-colors duration-300 shadow-none border-none"> */}
        <h2 className="text-2xl font-bold mb-4">Our Facilities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Physical Infrastructure</h3>
            <ul className="space-y-2">
              <li>• State-of-the-art office spaces with modern amenities</li>
              <li>• Biometric access control systems</li>
              <li>• 24/7 CCTV monitoring</li>
              <li>• Purpose-built secure workstations</li>
              <li>• Dedicated server rooms with climate control</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Infrastructure</h3>
            <ul className="space-y-2">
              <li>• Advanced firewall protection</li>
              <li>• Encrypted VPN services</li>
              <li>• AES 256 encryption for all communications</li>
              <li>• Role-based access control systems</li>
              <li>• Enterprise-grade antivirus protection</li>
            </ul>
          </div>
        </div>
      {/* </Card> */}
    </div>
  )
}
