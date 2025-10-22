import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Our People | ${APP_NAME}`,
  description: `Meet the team behind ${APP_NAME} - our leadership and key team members.`,
}

interface TeamMember {
  name: string
  position: string
  image: string
  bio?: string
  linkedin?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    position: "Founder & CEO",
    image: "/team/john-smith.jpg",
    bio: "With over 20 years of experience in healthcare technology, John leads our vision of transforming healthcare delivery through innovative solutions.",
    linkedin: "https://linkedin.com/in/john-smith"
  },
  {
    name: "Michael Johnson",
    position: "Executive Director",
    image: "/team/michael-johnson.jpg",
    bio: "Michael brings strategic insight and operational excellence to our organization, driving sustainable growth and market expansion.",
    linkedin: "https://linkedin.com/in/michael-johnson"
  },
  {
    name: "David Williams",
    position: "President of Sales",
    image: "/team/david-williams.jpg",
    bio: "David leads our global sales initiatives, building strong partnerships and delivering value-driven solutions to healthcare organizations.",
    linkedin: "https://linkedin.com/in/david-williams"
  },
  {
    name: "Robert Brown",
    position: "COO",
    image: "/team/robert-brown.jpg",
    bio: "As COO, Robert oversees our day-to-day operations, ensuring operational efficiency and maintaining our high standards of service delivery.",
    linkedin: "https://linkedin.com/in/robert-brown"
  },
  {
    name: "James Anderson",
    position: "General Manager",
    image: "/team/james-anderson.jpg",
    bio: "James manages our key client relationships and internal teams, fostering collaboration and driving successful project outcomes.",
    linkedin: "https://linkedin.com/in/james-anderson"
  }
]

export default function PeoplePage() {
  return (
    <div className="w-full px-8 py-8">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold mb-6">Our People</h1>
        <p className="text-xl mb-4">
          GROW with {APP_NAME} - Achieve More, Thrive Faster
        </p>
        <p>
          Our team comprises industry veterans, innovators, and dedicated professionals who bring diverse expertise to deliver exceptional healthcare solutions. Each member contributes unique insights and skills, working collaboratively to drive our mission forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-none border-none group">
            <div className="aspect-[4/3] relative">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-foreground/80 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-primary-foreground transition-colors duration-300">{member.name}</h3>
              <p className="group-hover:text-primary-foreground/80 transition-colors duration-300">{member.position}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mt-16">
        <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
            <ul className="space-y-3">
              <li>• Innovation-driven environment</li>
              <li>• Professional growth opportunities</li>
              <li>• Global exposure and impact</li>
              <li>• Competitive benefits package</li>
              <li>• Work-life balance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li>• Excellence in everything we do</li>
              <li>• Integrity and transparency</li>
              <li>• Customer-centric approach</li>
              <li>• Continuous learning</li>
              <li>• Collaborative spirit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
