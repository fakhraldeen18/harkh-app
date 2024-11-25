import React from 'react'
import { BsPeople, BsGear, BsCloud, BsHeadset, BsSpeedometer } from 'react-icons/bs'
import { FaChartLine, FaCode, FaUserShield, FaInfinity } from 'react-icons/fa'
import Button from '../common/Button'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const plans = [
    {
      name: "Premium",
      price: { monthly: 15, annual: 150 },
      description: "Everything you need for a growing business",
      features: [
        { text: "Up to 25 team members", icon: <BsPeople className="h-5 w-5" /> },
        { text: "Advanced task management", icon: <BsGear className="h-5 w-5" /> },
        { text: "Unlimited projects", icon: <FaInfinity className="h-5 w-5" /> },
        { text: "25GB storage", icon: <BsCloud className="h-5 w-5" /> },
        { text: "Advanced analytics", icon: <FaChartLine className="h-5 w-5" /> },
        { text: "Priority support", icon: <BsHeadset className="h-5 w-5" /> },
        { text: "Custom workflows", icon: <BsSpeedometer className="h-5 w-5" /> },
        { text: "Team collaboration tools", icon: <FaCode className="h-5 w-5" /> }
      ],
      cta: "Start now",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Advanced features for large organizations",
      features: [
        { text: "Unlimited team members", icon: <BsPeople className="h-5 w-5" /> },
        { text: "Enterprise-grade security", icon: <FaUserShield className="h-5 w-5" /> },
        { text: "Unlimited storage", icon: <BsCloud className="h-5 w-5" /> },
        { text: "Custom analytics", icon: <FaChartLine className="h-5 w-5" /> },
        { text: "24/7 priority support", icon: <BsHeadset className="h-5 w-5" /> },
        { text: "API access", icon: <FaCode className="h-5 w-5" /> },
        { text: "Custom integrations", icon: <BsGear className="h-5 w-5" /> },
        { text: "Dedicated success manager", icon: <BsPeople className="h-5 w-5" /> },
        { text: "Advanced permissions", icon: <FaUserShield className="h-5 w-5" /> }
      ],
      cta: "Contact us",
      highlighted: false
    }
  ]

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The right price for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your team size and requirements
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={classNames(
                plan.highlighted ? 'ring-2 ring-primary-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex flex-col h-full">
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.highlighted && (
                      <p className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                        Most popular
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price?.monthly ? `$${plan.price.monthly}` : 'Custom pricing'}
                    </span>
                    {plan.price?.monthly && (
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /month
                      </span>
                    )}
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex gap-x-3 items-center">
                        <span className="text-primary-600 flex-shrink-0">
                          {feature.icon}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-8">
                  <Button
                    href="#"
                    variant={plan.highlighted ? 'gradient' : 'primary'}
                  >
                    {plan.highlighted ? 'Get started' : 'Contact us'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
