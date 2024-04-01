import Graphics from '../assets/Graphics.png'

const list = [
    {
        title: "Express Your Interest",
        description: "Submit the form in the button below. We’re excited to hear from organizations curious about leveraging blockchain for social good."
    },
    {
        title: "Let’s Chat",
        description: "We’ll schedule a call to explore how your organization can contribute to the alliance and discuss the resources you might need. This is an opportunity for us to learn about your goals and how we can support them."
    },
    {
        title: "Join the Adventure",
        description: "Once we’ve identified how you can best engage with the alliance, we’ll guide you through the application process. From there, you’ll embark on an exciting journey of collaboration, innovation, and positive impact with like-minded organizations."
    }
]

export const HowJoin = () => {
    return (
        <div className="w-[1231.97px] justify-between items-center inline-flex">
            <div className="w-[709px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[426px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-slate-800 text-[32px] font-bold font-['Inter'] leading-[41.60px]">How to Begin Your Journey </div>
                        </div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Join us on our mission to harness the power of blockchain for positive change.</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[344px] flex-col justify-start items-start gap-1 flex">
                        {
                            list?.map((item, index) => {
                                return (
                                    <div key={index} className="justify-start items-start gap-3 inline-flex">
                                        <div className="w-[11px] h-[11px] bg-cyan-500 mt-2" />
                                        <div className="w-[476px] flex-col justify-start items-start inline-flex">
                                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{item?.title}</div>
                                            </div>
                                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">{item?.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="px-6 py-3 justify-center transform items-center inline-flex button cursor-pointer mt-4">
                    Apply Now
                </div>
            </div>
            <img className="w-[441px] h-[604px]" src={Graphics} />
        </div>
    )
}