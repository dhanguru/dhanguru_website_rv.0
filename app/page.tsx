"use client";

import { ArrowRight, BarChart2, PieChart, TrendingUp, Target, Calendar, Users, Brain, Mic, Globe } from "lucide-react"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Card, CardContent } from "components/ui/card"
import Header from "components/header"
import Footer from "components/footer"
import { FeatureCard } from "components/feature-card"
import { SectionHeading } from "components/section-heading"
import { IllustrationCard } from "components/illustration-card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/95">
        <Header />
        <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-15"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-text-gradient">
                DhanGuru: Your Financial Future
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Join the waitlist for our AI-driven financial platform launching soon. Take control of your finances with smart, personalized insights.
              </p>
            </div>

            {/* Illustrations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              <IllustrationCard imagePath="/images/home_page.svg" altText="DhanGuru Home Page Illustration" delay={0} />
              <IllustrationCard
                imagePath="/images/daily_analytics.svg"
                altText="DhanGuru Analytics Illustration"
                delay={200}
              />
            </div>

            {/* Email Signup */}
            <div className="max-w-lg mx-auto mb-12" data-aos="fade-up" data-aos-delay="400">
              <form className="flex flex-col sm:flex-row items-center gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-primary/30 focus-visible:ring-primary/50 bg-background/80 backdrop-blur-sm"
                  aria-label="Email for launch notification"
                />
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                  aria-label="Join waitlist"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Animated Shapes */}
          <div className="hidden lg:block">
            <div className="absolute top-24 left-16 w-12 h-12 bg-primary/15 dark:bg-primary/25 rounded-full animate-float"></div>
            <div className="absolute bottom-24 right-16 w-16 h-16 bg-secondary/15 dark:bg-secondary/25 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15 backdrop-blur-sm relative">
          <div className="container mx-auto relative z-10">
            <SectionHeading title="Why DhanGuru?" />

            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
              <p className="text-xl text-foreground/90 leading-relaxed">
                DhanGuru is your AI-powered partner for smarter financial decisions. Our platform offers intuitive tools and personalized insights to help you manage your money with confidence, no matter your financial background.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 left-0 w-full h-16 bg-wave-pattern bg-repeat-x opacity-20 dark:opacity-30"></div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <SectionHeading title="The Challenge" />

            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <Card className="border-l-4 border-l-accent shadow-xl bg-background/70 backdrop-blur-md hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground/90 mb-6">
                    Managing personal finances can be overwhelming. Common challenges include:
                  </p>

                  <ul className="space-y-4 pl-0 text-foreground/90">
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="150">
                      <BarChart2 className="h-5 w-5 text-accent mr-3 mt-1" />
                      <span>Difficulty tracking spending and income patterns.</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                      <PieChart className="h-5 w-5 text-accent mr-3 mt-1" />
                      <span>Lack of clarity on where money is spent.</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="250">
                      <TrendingUp className="h-5 w-5 text-accent mr-3 mt-1" />
                      <span>Limited insights into financial habits.</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="300">
                      <Target className="h-5 w-5 text-accent mr-3 mt-1" />
                      <span>No personalized guidance for financial growth.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Animated Shapes */}
          <div className="hidden lg:block">
            <div className="absolute top-1/3 right-12 w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full animate-float animation-delay-500"></div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/5 to-secondary/10 dark:from-secondary/10 dark:to-secondary/15 backdrop-blur-sm relative">
          <div className="container mx-auto relative z-10">
            <SectionHeading title="Our Solution" />

            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-foreground/90 text-center mb-12" data-aos="fade-up" data-aos-delay="100">
                DhanGuru empowers you with AI-driven tools to take control of your finances.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-aos="fade-up" data-aos-delay="150">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.03] border-t-4 border-t-primary bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 rounded-full bg-primary/20 text-primary inline-block group-hover:bg-primary/30 transition-colors">
                        <BarChart2 className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Smart Tracking</h3>
                      <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                        Monitor spending and income with real-time insights to identify savings opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div data-aos="fade-up" data-aos-delay="250">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 hover:scale-[1.03] border-t-4 border-t-secondary bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 rounded-full bg-secondary/20 text-secondary inline-block group-hover:bg-secondary/30 transition-colors">
                        <PieChart className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-secondary">Visual Reports</h3>
                      <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                        Understand your finances with clear, interactive charts and detailed reports.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div data-aos="fade-up" data-aos-delay="350">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.03] border-t-4 border-t-accent bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 rounded-full bg-accent/20 text-accent inline-block group-hover:bg-accent/30 transition-colors">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <h3>Based on your financial data, receive tailored advice to optimize your budget and investments.</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 left-0 w-full h-16 bg-wave-pattern-inverted bg-repeat-x opacity-20 dark:opacity-30 transform rotate-180"></div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <SectionHeading title="Core Features" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <FeatureCard
                title="AI-Powered Advice"
                description="Personalized recommendations based on your financial behavior."
                icon={<Brain className="h-6 w-6" />}
                delay={0}
              />
              <FeatureCard
                title="Voice-Controlled Budgeting"
                description="Manage finances hands-free with voice commands."
                icon={<Mic className="h-6 w-6" />}
                delay={100}
              />
              <FeatureCard
                title="Multilingual Support"
                description="Accessible finance tools in multiple languages."
                icon={<Globe className="h-6 w-6" />}
                delay={200}
              />
              <FeatureCard
                title="Goal Tracking"
                description="Set and monitor your financial goals with ease."
                icon={<Target className="h-6 w-6" />}
                delay={300}
              />
              <FeatureCard
                title="Daily Insights"
                description="Get daily reports on spending and budgeting."
                icon={<Calendar className="h-6 w-6" />}
                delay={400}
              />
              <FeatureCard
                title="Collaborative Planning"
                description="Share budgeting with family or partners."
                icon={<Users className="h-6 w-6" />}
                delay={500}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
