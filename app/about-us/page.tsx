import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `About Us | ${APP_NAME}`,
  description: `Learn about ${APP_NAME} - our mission, vision, and commitment to transforming healthcare solutions.`,
}

export default function AboutUsPage() {
  return (
    <div className="px-8 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
      <Card className="p-6 w-full">
        <p className="text-lg text-card-foreground">
          Founded in 1999, {APP_NAME} has been at the vanguard of delivering cutting-edge healthcare solutions, transforming the way healthcare organizations optimize their operations and enhance patient outcomes. Our expertise extends across a broad spectrum of healthcare entities, including physicians, independent practitioners, HMOs, ACOs, IPAs, MSOs, DME manufacturers, and payers.
        </p>
      </Card>
    </div>
  )
}
