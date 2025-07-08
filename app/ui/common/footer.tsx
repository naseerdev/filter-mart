export default async function Footer (){
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img alt="FilterMart Logo White" className="h-8 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxYXgdHcgVR8evYuig-zQTPb3DQihjp_uphWRAqo1CJrUvwY-Sy_53ovynN4sNK3vQfMoKKJLCutVAt4vCrZgZVjMdybOfTMyHoMiIArhcP2sFhmUuvPh0ZOntYWInFBR0rzto0mr3tKkqvYE8tpd6VJ7Tb6ML3qAMHneIX03rUKYH-4ZkL03sn-ECjA_xzC1DKt85Yc64OP3kASVMAhV2fjJJhpq49YViY8pTTqDGendCmJ7Uy5j9Jwyby-xVjmBElIgUcHK4vgs" />
              <nav className="space-y-2 text-sm">
                <a className="hover:text-yellow-400 block" href="#">SEARCH</a>
                <a className="hover:text-yellow-400 block" href="#">MARKETS</a>
                <a className="hover:text-yellow-400 block" href="#">OEM PARTNERS</a>
                <a className="hover:text-yellow-400 block" href="#">ABOUT</a>
                <a className="hover:text-yellow-400 block" href="#">CONTACT</a>
              </nav>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">CUSTOMER SERVICE</h5>
              <nav className="space-y-2 text-sm">
                <a className="hover:text-yellow-400 block" href="#">LOGIN</a>
                <a className="hover:text-yellow-400 block" href="#">FILTERFAB</a>
                <a className="hover:text-yellow-400 block" href="#">SALES POLICY</a>
                <a className="hover:text-yellow-400 block" href="#">PRIVACY NOTICE</a>
                <a className="hover:text-yellow-400 block" href="#">LOVE OUR SITE?</a>
              </nav>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">TRACK YOUR SHIPMENT</h5>
              <div className="flex space-x-3 items-center">
                <img alt="FedEx Logo" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATcxXuI_yOKeWrAxuAO40uE72HnruYal0yxnLGxMULsm7A-MPCzkzgfJTm2xdauImLMXuIQ5-Ot8S2R-E2XdDokKzpYmB6WWXvJew5ePP11US5vcI1Za5SIme3cW6y7zNE0Jh-062Eqk5q7tJ05AByTDMN8iY-lBzq9vCAIppsp3iq2gM8pcazdUFWp4vTFvieHZBS4-Iy1Bu5frxuoTyeCZIxzYT4IORcntppirdArUH4zsff_lYICKz235S8Rl9UAes1zyD-ilA" />
                <img alt="UPS Logo" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8v0WsnKne8i2iU5q1EuzYtIeyesg-VmakzJd4Z9w1InxdFeQo089_Tq-8I2b_1mDo-7ic7JHdO2uDZgwAmqUYRXQpYWjP4LIyxWbcS5AeSdynWMoARSlTHQtoYEVxcJbupNoeuxtItkGBpY66llNlfNC17XaiOCul9vaumt4P9hImEP7jPHPQ1lhTdGPEaJ8OMVPiyqdJ5JRDjlj6LHIHR5dRyMAICGQ9P8Nn4boVpAzBeBHKmve1-ESuPly4PIjnkuHsq3Ofqjk" />
              </div>
              <h5 className="font-semibold text-white mt-6 mb-3">MAJOR CREDIT CARDS ACCEPTED</h5>
              <div className="flex space-x-2 items-center">
                <img alt="Visa Logo" className="h-6 bg-white p-1 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ufz2cRAxUFit50Y2Lb3Hc3rtn4t1SWNmYx-229y3YC48L-2zAzv7oAU-yrTo7bbJxY7iXdMzSNK7J65mY5Bc9pr7cFVHxriwpQBDj1JiEl4U0PDQarGQBuRH1am2YJR5VM9dni3UcdzDFcsys6OeQurL4NJ_3ReTO3zDdl5FmnUDQtYl9khImzPndOjVHcwxYE7FuoSr3N3mCMqm12HqtDeokIF1fKMuFfpGz2GSNPgfsLvpt0GbB5JVaNzcxvVSbCymlFArWkQ" />
                <img alt="Mastercard Logo" className="h-6 bg-white p-1 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHgi1HsMuJeLOJ-zBhtT2PhJq_M8JIDjFZD7HRQC5p3ydHAPWJabvEMKch40hpxbxgXrKBGBxuV0GDt4kvJO-m15AjkPPRhHT8-JWpekI65mU9evvpi2F3d3ACV402Fxwi-sQHGUixdJ5xRJ-i7PTvNpq0ROq8Iw_PWDsjFkfQs8K8cZPPiljJnBxJwny-k78Nc853ikn5tRmZdo578n-biy72a7Bq777bbnGPiE48_dGwOJKNY6hGoxMR1TjVB0BguBm3Aga4Hg" />
                <img alt="American Express Logo" className="h-6 bg-white p-1 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpcaeXUXeI5UxOHbSuoK6kyez01brnHi2yWI0Ep-ETBqDj8tYuLrzD8PKFPpmoCcJm46ZqT9MyZh5WgzQHAlvaMnAHSQcpPMPo_CjeSyYKqAo88Fs3H6ox5eZezE4fxWB0lnz3vFN36n6RAxb3vuZ2ZLlTWIjFKlKD3tj8yhIafPkWnj1Fcssr29_cwx2-Gm5n2laoNxz7N-SquxNxvb36P46PVC2SFYqIhDG0laeBb8giqWzrw9tYX_AiJpNGOGLDLkqNJNkES7w" />
                <img alt="Discover Logo" className="h-6 bg-white p-1 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvoLGNZyciYZ0d2YseBFJdUHy_8j9UGdCXed5ARhXZfF4TvUbSJrJkHMy-EOAGk-QaflQL7-RkzuH9nDAjJG0rRw0Bn6aL5cylmUjNa4r_-ZueJVGnq0LHNEKsR6d9QcpB0Kv3hD8zh3tuX9MV8I-TE7KyBUMo7jEqYTjqKKccAY07Kq2iiy9vqC02VoY2RoR0KyHOXBiAYeEk8FiqgE2ylWKJEyleJOPve2FlxQzlQbHqqUO2QC7QRE13MleqEQ-D_vsE6pr9HM" />
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">PRODUCTS CROSS-REFERENCED</h5>
              <div className="flex space-x-1">
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">1</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">1</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">3</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">7</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">7</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">2</span>
                <span className="bg-gray-700 text-white text-2xl font-bold p-2 rounded">9</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2023 FILTERMART. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    )
}