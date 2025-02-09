import Logo from './logo'
import { Lang } from '@/app/[lang]/page'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer lang={lang}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://t.me/yana_bourne" aria-label="Telegram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" target='_blank' href="mailto:website@yanabourne.com" aria-label="Email">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <Logo lang={lang} />
          <div className="text-sm text-slate-500 mr-4">© yanabourne.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
