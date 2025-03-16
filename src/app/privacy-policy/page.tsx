"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-black">Privacy Policy</h1>
        </div>

        <Card className="mb-8 bg-card text-black dark:text-black shadow-md">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-xl text-black dark:text-black">Introduction to HighPaidJobs.us</CardTitle>
            <CardDescription className="text-muted-foreground">
              Welcome to HighPaidJobs - your ultimate destination for finding high-paying career opportunities and
              professional development resources!
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              At HighPaidJobs, we value your privacy and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <p className="text-sm text-muted-foreground">
              By accessing or using HighPaidJobs.us, you agree to the terms outlined in this Privacy Policy. If you do
              not agree with our policies and practices, please do not use our services.
            </p>
          </CardContent>
        </Card>

        <ScrollArea className="h-[600px] rounded-md border border-border p-4 bg-accent">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Information We Collect
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-medium text-black dark:text-black">Personal Information</h3>
                  <p className="text-sm text-muted-foreground">
                    We may collect personal information that you voluntarily provide when using our services, including
                    but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Full name and contact information (email address, phone number)</li>
                    <li>Professional information (resume, work history, skills, education)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (when applicable for premium services)</li>
                    <li>Communication preferences and feedback</li>
                  </ul>

                  <h3 className="font-medium text-black dark:text-black">Automatically Collected Information</h3>
                  <p className="text-sm text-muted-foreground">
                    When you visit our website, we may automatically collect certain information about your device and
                    usage patterns, including:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>IP address and device identifiers</li>
                    <li>Browser type and version</li>
                    <li>Operating system information</li>
                    <li>Pages visited and time spent on our platform</li>
                    <li>Referral sources and navigation patterns</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                How We Use Your Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Connecting you with potential employers and job opportunities</li>
                    <li>Personalizing your experience and delivering relevant content</li>
                    <li>Communicating with you about updates, promotions, and services</li>
                    <li>Analyzing usage patterns to improve our platform</li>
                    <li>Ensuring the security and integrity of our services</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Disclosure of Your Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We may share your information with the following parties:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>
                      <strong>Employers and Recruiters:</strong> With your consent, we may share your professional
                      information with potential employers and recruiters.
                    </li>
                    <li>
                      <strong>Service Providers:</strong> We may engage trusted third parties to perform services on our
                      behalf, such as payment processing, data analysis, and customer support.
                    </li>
                    <li>
                      <strong>Business Partners:</strong> We may share information with our business partners, including
                      Stride, Climb, and MiaShare, to enhance your experience and opportunities.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information when required by law or to
                      protect our rights, privacy, safety, or property.
                    </li>
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Cookies and Tracking Technologies
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. These
                    technologies help us:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you interact with our services</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Analyze the performance of our website</li>
                    <li>Protect against fraudulent activity</li>
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    You can manage your cookie preferences through your browser settings. However, disabling certain
                    cookies may limit your ability to use some features of our platform.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Data Security
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information
                    from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission
                    over the Internet or electronic storage is 100% secure.
                  </p>

                  <p className="text-sm text-muted-foreground">
                    While we strive to use commercially acceptable means to protect your information, we cannot
                    guarantee its absolute security. You are responsible for maintaining the confidentiality of your
                    account credentials and for restricting access to your devices.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Your Privacy Rights
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Depending on your location, you may have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction or objection to processing</li>
                    <li>Data portability</li>
                    <li>Withdrawal of consent</li>
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    To exercise these rights, please contact us at{" "}
                    <span className="font-medium text-primary">highpaidjobs.us@gmail.com</span>. We will respond to your
                    request within the timeframe required by applicable law.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Children's Privacy
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our services are not intended for individuals under the age of 13. We do not knowingly collect
                    personal information from children under 13. If you are a parent or guardian and believe that your
                    child has provided us with personal information, please contact us immediately at{" "}
                    <span className="font-medium text-primary">highpaidjobs.us@gmail.com</span>.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Third-Party Links and Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our website may contain links to third-party websites, services, or content that are not owned or
                    controlled by HighPaidJobs. We are not responsible for the privacy practices or content of these
                    third parties.
                  </p>

                  <p className="text-sm text-muted-foreground">
                    We encourage you to review the privacy policies of any third-party sites you visit or services you
                    use. This Privacy Policy applies solely to information collected by HighPaidJobs.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Updates to This Privacy Policy
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. The updated policy will be effective immediately upon
                    posting on our website.
                  </p>

                  <p className="text-sm text-muted-foreground">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we collect,
                    use, and protect your information. Your continued use of our services after any changes to this
                    Privacy Policy constitutes your acceptance of the updated terms.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-black dark:text-black">
                Contact Us
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy
                    practices, please contact us at:
                  </p>

                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">highpaidjobs.us@gmail.com</span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    We are committed to working with you to resolve any privacy-related issues in a fair and timely
                    manner.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>

        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-center text-muted-foreground">
            By using HighPaidJobs.us, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button  className=" hover:bg-primary">
              <Link href="/" className="text-white">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

