
const bannerTitle = "Need pest help? Save $50 on your first recurring service today with code GET50."

export default function TopBanner() {
  return (
    <div className="bg-[#CC092F]">
            <div className="max-w-screen-xl mx-auto py-1 flex items-center justify-between text-white md:px-8 px-3">
                <div className="flex items-center gap-x-4">
                    <div className="w-8 h-8 flex-none rounded-lg bg-red-800 flex items-center justify-center">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                    </div>
                    <p className="py-2 font-medium text-xs">
                    {bannerTitle} 
                    </p>
                </div>
                <button title="close" className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring">
                </button>
            </div>
        </div>
  )
}
