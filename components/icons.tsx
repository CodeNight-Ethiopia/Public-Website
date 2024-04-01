import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  User,
  Linkedin,
  type Icon as LucideIcon,
} from "lucide-react"
import Image from 'next/image';

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  linkedin: Linkedin,
  // twitter: Twitter,
  user: User,
  my_moon: (props: LucideProps) => (
    <Image
      priority
      src="/moon.svg"
      height={332}
      width={332}
      alt="Custom Moon"
    />
  ),
  codenight_logo: (props: LucideProps) => (
    <Image
      priority
      src="/assets/Image/codenight logo.png"
      height={22}
      width={22}
      alt="Custom Moon"
    />
  ),
  slogan: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  codenight: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g id="Group_121" data-name="Group 121" transform="translate(2356 -5871)">
        <g id="Group_119" data-name="Group 119" transform="translate(1)">
          <path
            id="Rectangle_125"
            data-name="Rectangle 125"
            d="M21,0H246a21,21,0,0,1,21,21V183a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V21A21,21,0,0,1,21,0Z"
            transform="translate(-2330 5871)"
            fill="#212d5f"
          />
          <g id="Group_118" data-name="Group 118">
            <rect
              id="Rectangle_126"
              data-name="Rectangle 126"
              width="225"
              height="139"
              transform="translate(-2309 5893)"
              fill="#0f1841"
            />
            <rect
              id="Rectangle_127"
              data-name="Rectangle 127"
              width="43"
              height="11"
              rx="5.5"
              transform="translate(-2298 5904)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_128"
              data-name="Rectangle 128"
              width="20"
              height="11"
              rx="5.5"
              transform="translate(-2270 5926)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_135"
              data-name="Rectangle 135"
              width="22"
              height="11"
              rx="5.5"
              transform="translate(-2298 5969)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_139"
              data-name="Rectangle 139"
              width="30"
              height="11"
              rx="5.5"
              transform="translate(-2260 6011)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_141"
              data-name="Rectangle 141"
              width="21"
              height="11"
              rx="5.5"
              transform="translate(-2212 5990)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_145"
              data-name="Rectangle 145"
              width="21"
              height="11"
              rx="5.5"
              transform="translate(-2223 5947)"
              fill="#3d656d"
            />
            <rect
              id="Rectangle_131"
              data-name="Rectangle 131"
              width="32"
              height="11"
              rx="5.5"
              transform="translate(-2298 5947)"
              fill="#54467b"
            />
            <rect
              id="Rectangle_140"
              data-name="Rectangle 140"
              width="43"
              height="11"
              rx="5.5"
              transform="translate(-2223 6011)"
              fill="#54467b"
            />
            <rect
              id="Rectangle_142"
              data-name="Rectangle 142"
              width="20"
              height="11"
              rx="5.5"
              transform="translate(-2223 5968)"
              fill="#54467b"
            />
            <rect
              id="Rectangle_132"
              data-name="Rectangle 132"
              width="64"
              height="11"
              rx="5.5"
              transform="translate(-2244 5926)"
              fill="#54467b"
            />
            <rect
              id="Rectangle_133"
              data-name="Rectangle 133"
              width="22"
              height="11"
              rx="5.5"
              transform="translate(-2250 5904)"
              fill="#54467b"
            />
            <rect
              id="Rectangle_134"
              data-name="Rectangle 134"
              width="33"
              height="11"
              rx="5.5"
              transform="translate(-2261 5947)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_143"
              data-name="Rectangle 143"
              width="31"
              height="11"
              rx="5.5"
              transform="translate(-2196 5969)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_146"
              data-name="Rectangle 146"
              width="42"
              height="11"
              rx="5.5"
              transform="translate(-2175 5926)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_147"
              data-name="Rectangle 147"
              width="64"
              height="11"
              rx="5.5"
              transform="translate(-2223 5904)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_137"
              data-name="Rectangle 137"
              width="33"
              height="11"
              rx="5.5"
              transform="translate(-2250 5990)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_138"
              data-name="Rectangle 138"
              width="32"
              height="11"
              rx="5.5"
              transform="translate(-2298 6011)"
              fill="#aea65b"
            />
            <rect
              id="Rectangle_129"
              data-name="Rectangle 129"
              width="22"
              height="11"
              rx="5.5"
              transform="translate(-2298 5926)"
              fill="#b08558"
            />
            <rect
              id="Rectangle_130"
              data-name="Rectangle 130"
              width="41"
              height="11"
              rx="5.5"
              transform="translate(-2271 5968)"
              fill="#b08558"
            />
            <rect
              id="Rectangle_144"
              data-name="Rectangle 144"
              width="22"
              height="11"
              rx="5.5"
              transform="translate(-2196 5947)"
              fill="#b08558"
            />
            <rect
              id="Rectangle_149"
              data-name="Rectangle 149"
              width="22"
              height="11"
              rx="5.5"
              transform="translate(-2174 6011)"
              fill="#b08558"
            />
            <rect
              id="Rectangle_148"
              data-name="Rectangle 148"
              width="32"
              height="11"
              rx="5.5"
              transform="translate(-2154 5904)"
              fill="#b08558"
            />
            <rect
              id="Rectangle_136"
              data-name="Rectangle 136"
              width="43"
              height="11"
              rx="5.5"
              transform="translate(-2298 5990)"
              fill="#b08558"
            />
          </g>
        </g>
        <g id="Group_120" data-name="Group 120">
          <path
            id="Rectangle_150"
            data-name="Rectangle 150"
            d="M0,0H321a0,0,0,0,1,0,0V0a22,22,0,0,1-22,22H22A22,22,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
            transform="translate(-2356 6054)"
            fill="#354173"
          />
          <path
            id="Rectangle_151"
            data-name="Rectangle 151"
            d="M0,0H109a0,0,0,0,1,0,0V0A11,11,0,0,1,98,11H11A11,11,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
            transform="translate(-2250 6054)"
            fill="#55608d"
          />
        </g>
      </g>
    </svg>
  ),
  debugging: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
      />
    </svg>
  ),
  openmic: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  ),
  
  chat: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  ),

  twitter: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),

  youtube: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),

  microphone: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),

  clock: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),






}
