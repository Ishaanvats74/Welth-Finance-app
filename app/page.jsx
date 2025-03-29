import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="conatiner mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ),[])}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 ">Everything you need to manage your finance. </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((featuresData,feature) => (
                <Card key={feature} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {featuresData.icon}
                  <h3 className="text-xl fomt-semibold ">{featuresData.title}</h3>
                  <p className="text-gray-600">{featuresData.description}</p>
                </CardContent>
              </Card>
              ),[])}
            </div>
          </div>
        </section>


        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 ">How it works </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksData.map((howItWorksData,step) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">{howItWorksData.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{howItWorksData.title}</h3>
                  <p className="text-gray-600">{howItWorksData.description}</p>
                </div>            
              ),[])}
            </div>
          </div>
        </section>


        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 ">What our user's says</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsData.map((testimonialsData,user) => (
                <Card key={user} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex mb-4 items-center">
                    <Image src={testimonialsData.image} width={40} height={40} alt={testimonialsData.name} className="rounded-full"></Image>
                    <div className="ml-4 ">
                      <div className="font-semibold">{testimonialsData.name}</div>
                      <div className="text-sm text-gray-600">{testimonialsData.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 ">{testimonialsData.quote}</p>
                </CardContent>
              </Card>
              ),[])}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of your Finances?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of users who are already managing their finances smarter with welth</p>
            <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">Start Free Trial</Button>
            </Link>
          </div>
        </section>
    </div>
  );
}
