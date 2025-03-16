'use client'
import { ChevronRight } from "lucide-react";
import Container from "../Container";
import Link from "next/link";

const TicketToSuccess = () => {
  const cardsData = [
    {
      icon: (
        <svg
          width="52.500000"
          height="60.000000"
          viewBox="0 0 52.5 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="0.000012"
              y1="30.000034"
              x2="52.500027"
              y2="30.000034"
              id="paint_linear_1_1602_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.021000" stopColor="#03EFFE" />
              <stop offset="0.293000" stopColor="#24D2FE" />
              <stop offset="0.554000" stopColor="#3CBDFE" />
              <stop offset="0.796000" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M26.25 60C22.68 60 19.2 59.16 15.89 57.5C12.8 55.96 10.01 53.78 7.58 51.03C2.76 45.55 0 38.4 0 31.4L0 12.89C0 11.96 0.54 11.12 1.39 10.74L25.18 0.2C25.78 -0.07 26.47 -0.07 27.07 0.19L51.09 10.74C51.95 11.11 52.5 11.96 52.5 12.89L52.5 31.4C52.5 36.56 51.03 41.76 48.25 46.43C47.59 47.54 46.15 47.91 45.04 47.24C43.93 46.58 43.56 45.14 44.22 44.03C46.57 40.08 47.81 35.72 47.81 31.4L47.81 14.42L26.13 4.9L4.68 14.41L4.68 31.4C4.68 43.91 14.96 55.31 26.25 55.31C30.23 55.31 34.13 54 37.52 51.54C38.57 50.78 40.03 51.01 40.8 52.05C41.56 53.1 41.33 54.57 40.28 55.33C36.08 58.38 31.23 60 26.25 60ZM23.09 41.36C24.33 41.31 25.47 40.77 26.3 39.84C26.33 39.81 26.36 39.78 26.39 39.75L41.08 21.38C41.89 20.37 41.73 18.9 40.72 18.09C39.71 17.28 38.23 17.44 37.42 18.45L22.89 36.61L14.74 28.77C13.81 27.88 12.33 27.91 11.43 28.84C10.53 29.77 10.56 31.26 11.5 32.15L19.76 40.1C19.76 40.1 19.76 40.1 19.77 40.11C20.62 40.92 21.73 41.36 22.9 41.36C22.96 41.36 23.03 41.36 23.09 41.36Z"
            fill="url(#paint_linear_1_1602_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "99.99% Guaranteed Job Placement",
      description:
        "Land a $100k+ job in 8-16 weeks—or we keep working until you do",
    },
    {
      icon: (
        <svg
          width="50.710938"
          height="60.000244"
          viewBox="0 0 50.7109 60.0002"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="0.000000"
              y1="30.000092"
              x2="50.711044"
              y2="30.000092"
              id="paint_linear_1_1611_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.020800" stopColor="#03EFFE" />
              <stop offset="0.293100" stopColor="#24D2FE" />
              <stop offset="0.553800" stopColor="#3CBDFE" />
              <stop offset="0.795600" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M25.35 11.02C20.7 11.02 16.92 14.8 16.92 19.45L16.92 22.16C14.42 23.21 12.67 25.68 12.67 28.55L12.67 39.49C12.67 43.32 15.78 46.42 19.6 46.42L31.1 46.42C34.93 46.42 38.04 43.32 38.04 39.49L38.04 28.55C38.04 25.68 36.28 23.21 33.78 22.16L33.78 19.45C33.78 14.8 30 11.02 25.35 11.02ZM21.61 19.45C21.61 17.38 23.29 15.7 25.35 15.7C27.42 15.7 29.1 17.38 29.1 19.45L29.1 21.62L21.61 21.62L21.61 19.45ZM33.35 39.49C33.35 40.73 32.34 41.74 31.1 41.74L19.6 41.74C18.36 41.74 17.35 40.73 17.35 39.49L17.35 28.55C17.35 27.31 18.36 26.31 19.6 26.31L31.1 26.31C32.34 26.31 33.35 27.31 33.35 28.55L33.35 39.49ZM26.21 36.2C25.27 36.57 24.18 36.29 23.54 35.51C22.93 34.77 22.84 33.72 23.3 32.88C23.78 32.02 24.79 31.54 25.76 31.72C26.71 31.89 27.46 32.63 27.65 33.56C27.87 34.66 27.25 35.8 26.21 36.2ZM46.02 27.56L46.02 17.57C46.02 17.21 45.72 15.82 41.96 13.08C39.15 11.04 35.45 9 32.19 7.21C31.3 6.72 30.46 6.25 29.66 5.8C27 4.31 23.7 4.31 21.04 5.8C20.7 5.99 20.35 6.19 19.99 6.39C16.69 8.25 12.57 10.55 9.4 12.81C4.74 16.14 4.68 17.52 4.68 17.57L4.68 40.5C4.68 43.62 6.58 46.52 9.64 48.09L22.39 54.6C24.25 55.54 26.46 55.54 28.31 54.6L41.06 48.09C44.12 46.52 46.02 43.62 46.02 40.5L46.02 39.28C46.02 37.99 47.07 36.94 48.36 36.94C49.66 36.94 50.71 37.99 50.71 39.28L50.71 40.5C50.71 45.39 47.83 49.89 43.19 52.26L30.44 58.77C28.85 59.59 27.1 60 25.35 60C23.6 60 21.86 59.59 20.26 58.77L7.51 52.26C2.87 49.89 0 45.39 0 40.5L0 17.57C0 12.63 7.67 7.93 17.7 2.3C18.05 2.1 18.4 1.91 18.74 1.72C22.82 -0.58 27.88 -0.58 31.96 1.72C32.74 2.16 33.58 2.62 34.46 3.1C37.84 4.96 41.67 7.07 44.72 9.29C48.8 12.26 50.71 14.9 50.71 17.57L50.71 27.56C50.71 28.85 49.66 29.9 48.36 29.9C47.07 29.9 46.02 28.85 46.02 27.56Z"
            fill="url(#paint_linear_1_1611_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "AI & Recession-Proof Careers",
      description: "Future-ready roles that thrive no matter the economy.",
    },
    {
      icon: (
        <svg
          width="60.000000"
          height="60.000000"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="0.000000"
              y1="30.000000"
              x2="60.000000"
              y2="30.000000"
              id="paint_linear_1_1620_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.020800" stopColor="#03EFFE" />
              <stop offset="0.293100" stopColor="#24D2FE" />
              <stop offset="0.553800" stopColor="#3CBDFE" />
              <stop offset="0.795600" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M57.65 33.09C58.95 33.09 60 32.04 60 30.75L60 25.93C60 21.75 56.59 18.35 52.41 18.35L26.91 18.35C26.32 18.35 25.74 18.42 25.19 18.55L25.19 7.22C25.19 3.24 21.95 0 17.96 0L7.22 0C3.24 0 0 3.24 0 7.22L0 27.37C0 31.36 3.24 34.6 7.22 34.6L13.04 34.6C12.91 35.25 12.84 35.92 12.84 36.61C12.84 39.6 14.11 42.31 16.15 44.23C11.34 46.8 8.07 51.85 8.07 57.65C8.07 58.95 9.12 60 10.42 60L51.8 60C53.09 60 54.14 58.95 54.14 57.65C54.14 56.36 53.09 55.31 51.8 55.31L48.88 55.31L48.88 51.64L52.41 51.64C56.59 51.64 60 48.23 60 44.05L60 42.47C60 41.17 58.95 40.12 57.65 40.12C56.36 40.12 55.31 41.17 55.31 42.47L55.31 44.05C55.31 45.65 54.01 46.95 52.41 46.95L34.28 46.95C33.21 45.87 31.98 44.95 30.63 44.23C32.66 42.31 33.93 39.6 33.93 36.61C33.93 31.03 29.54 26.45 24.02 26.13L24.02 25.93C24.02 24.34 25.32 23.04 26.91 23.04L52.41 23.04C54.01 23.04 55.31 24.34 55.31 25.93L55.31 30.75C55.31 32.04 56.36 33.09 57.65 33.09ZM7.22 4.68L17.96 4.68C19.36 4.68 20.5 5.82 20.5 7.22L20.5 20.2L4.68 20.2L4.68 7.22C4.68 5.82 5.82 4.68 7.22 4.68ZM15.19 29.91L7.22 29.91C5.82 29.91 4.68 28.77 4.68 27.37L4.68 24.89L19.4 24.89C19.35 25.23 19.33 25.58 19.33 25.93L19.33 26.92C17.74 27.58 16.35 28.62 15.27 29.91C15.24 29.91 15.22 29.91 15.19 29.91ZM44.19 51.64L44.19 55.31L38.52 55.31C38.32 54.02 37.96 52.79 37.46 51.64L44.19 51.64ZM33.75 55.31L13.02 55.31C14.1 50.62 18.33 47.11 23.38 47.1L23.39 47.1C23.39 47.1 23.4 47.1 23.4 47.1C28.44 47.11 32.68 50.62 33.75 55.31ZM29.25 36.61C29.25 39.81 26.62 42.41 23.39 42.41C23.39 42.41 23.39 42.41 23.39 42.41C23.39 42.41 23.39 42.41 23.38 42.41C20.16 42.41 17.53 39.81 17.53 36.61C17.53 33.4 20.16 30.8 23.39 30.8C26.62 30.8 29.25 33.4 29.25 36.61Z"
            fill="url(#paint_linear_1_1620_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "Live Interview Assistance",
      description: "Our experts join your interviews to help you shine.",
    },
    {
      icon: (
        <svg
          width="58.216797"
          height="60.000000"
          viewBox="0 0 58.2168 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="0.000000"
              y1="29.999992"
              x2="58.216637"
              y2="29.999992"
              id="paint_linear_1_1630_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.020800" stopColor="#03EFFE" />
              <stop offset="0.293100" stopColor="#24D2FE" />
              <stop offset="0.553800" stopColor="#3CBDFE" />
              <stop offset="0.795600" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M19.51 42.29C20.43 41.94 21.49 42.22 22.13 42.96C22.77 43.72 22.85 44.83 22.35 45.68C21.85 46.51 20.87 46.95 19.92 46.78C18.98 46.62 18.23 45.87 18.04 44.94C17.82 43.83 18.46 42.68 19.51 42.29ZM53.52 43.59L53.52 43.05C53.52 34.39 46.48 27.34 37.81 27.34L37.76 27.34C35.32 27.34 32.94 27.91 30.81 28.96L32.27 28.96C36.91 28.96 40.68 32.73 40.68 37.37L40.68 55.31L53.52 55.31C53.52 54.01 54.57 52.96 55.87 52.96C57.16 52.96 58.21 54.01 58.21 55.31L58.21 57.65C58.21 58.95 57.16 60 55.87 60L2.34 60C1.04 60 0 58.95 0 57.65L0 37.37C0 32.73 3.77 28.96 8.4 28.96L23 28.96C24.83 27.06 26.99 25.54 29.35 24.47C26.1 21.97 24.01 18.05 24.01 13.67C24.01 6.13 30.19 0 37.78 0C45.38 0 51.56 6.13 51.56 13.67C51.56 18.05 49.47 21.96 46.22 24.47C53.29 27.68 58.21 34.8 58.21 43.05L58.21 43.59C58.21 44.88 57.16 45.93 55.87 45.93C54.57 45.93 53.52 44.88 53.52 43.59ZM32.27 33.65L8.4 33.65C6.35 33.65 4.68 35.32 4.68 37.37L4.68 55.31L36 55.31L36 37.37C36 35.32 34.33 33.65 32.27 33.65ZM28.69 13.67C28.69 18.62 32.77 22.65 37.78 22.65C42.8 22.65 46.87 18.62 46.87 13.67C46.87 8.71 42.8 4.68 37.78 4.68C32.77 4.68 28.69 8.71 28.69 13.67Z"
            fill="url(#paint_linear_1_1630_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "One-on-One Mentoring",
      description: "Personalized guidance tailored to your goals.",
    },
    {
      icon: (
        <svg
          width="52.227539"
          height="60.000000"
          viewBox="0 0 52.2275 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="-0.000118"
              y1="30.000000"
              x2="52.227306"
              y2="30.000000"
              id="paint_linear_1_1639_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.020800" stopColor="#03EFFE" />
              <stop offset="0.293100" stopColor="#24D2FE" />
              <stop offset="0.553800" stopColor="#3CBDFE" />
              <stop offset="0.795600" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M23.33 24.18C23.39 23.74 23.07 22.95 21.98 22.56C20.29 21.97 18.98 21.46 18.38 21.18C16.29 20.2 15.1 18.23 15.26 16.04C15.42 13.82 16.9 11.91 18.94 11.25C19.14 10.16 20.1 9.33 21.25 9.33C22.35 9.33 23.28 10.09 23.52 11.12C24.91 11.52 25.98 12.31 26.62 13.22C27.37 14.28 27.11 15.75 26.05 16.49C24.99 17.23 23.53 16.98 22.79 15.92C22.64 15.71 21.79 15.29 20.37 15.71C20.19 15.77 19.96 16.07 19.93 16.39C19.93 16.51 19.91 16.72 20.38 16.94C20.65 17.07 21.63 17.47 23.54 18.14C26.52 19.2 28.34 21.92 27.98 24.77C27.68 27.14 25.95 28.9 23.45 29.48C23.13 30.38 22.26 31.03 21.25 31.03C20.17 31.03 19.27 30.31 18.99 29.32C17.65 28.94 16.32 28.22 15.37 27.04C14.56 26.03 14.72 24.56 15.73 23.74C16.73 22.93 18.21 23.09 19.02 24.1C19.58 24.79 20.94 25.07 21.95 24.98C22.34 24.95 23.25 24.8 23.33 24.18ZM52.22 38.43L52.22 48.38C52.22 52.82 49.42 56.82 45.25 58.34L41.34 59.76C41.08 59.85 40.81 59.9 40.54 59.9C40.27 59.9 40 59.85 39.74 59.76L37.69 59.01C36.4 59.66 34.97 60 33.51 60L9.37 60C4.2 60 0 55.79 0 50.62L0 9.37C0 4.2 4.2 0 9.37 0L33.51 0C38.68 0 42.88 4.2 42.88 9.37L42.88 23.47C42.88 24.77 41.83 25.81 40.54 25.81C39.25 25.81 38.2 24.77 38.2 23.47L38.2 9.37C38.2 6.79 36.09 4.68 33.51 4.68L9.37 4.68C6.79 4.68 4.68 6.79 4.68 9.37L4.68 50.62C4.68 53.2 6.79 55.31 9.37 55.31L31.44 55.31C30.22 53.89 29.38 52.16 29.03 50.29L11.91 50.29C10.62 50.29 9.57 49.24 9.57 47.95C9.57 46.65 10.62 45.6 11.91 45.6L28.86 45.6L28.86 40.78L11.91 40.78C10.62 40.78 9.57 39.73 9.57 38.43C9.57 37.14 10.62 36.09 11.91 36.09L31.2 36.09C31.21 36.09 31.44 36.1 31.51 36.11C33.24 36.31 34.96 35.75 36.24 34.55C38.65 32.28 42.43 32.28 44.84 34.55C46.12 35.75 47.85 36.32 49.6 36.11C50.26 36.02 50.93 36.23 51.43 36.68C51.93 37.12 52.22 37.76 52.22 38.43ZM47.54 40.75C45.35 40.47 43.28 39.51 41.63 37.97C41.02 37.39 40.06 37.39 39.45 37.97C37.8 39.51 35.73 40.47 33.54 40.75L33.54 48.38C33.54 50.86 35.11 53.09 37.43 53.93L40.54 55.06L43.65 53.93C45.97 53.09 47.54 50.86 47.54 48.38L47.54 40.75Z"
            fill="url(#paint_linear_1_1639_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "Salary Negotiation Boost",
      description: "Secure an extra $5k-$10k on your offer—guaranteed.",
    },
    {
      icon: (
        <svg
          width="54.662109"
          height="60.000000"
          viewBox="0 0 54.6621 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-9 md:h-auto w-9 md:w-auto"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <linearGradient
              x1="0.000000"
              y1="30.000000"
              x2="54.661873"
              y2="30.000000"
              id="paint_linear_1_1648_0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FE" />
              <stop offset="0.020800" stopColor="#03EFFE" />
              <stop offset="0.293100" stopColor="#24D2FE" />
              <stop offset="0.553800" stopColor="#3CBDFE" />
              <stop offset="0.795600" stopColor="#4AB0FE" />
              <stop offset="1.000000" stopColor="#4FACFE" />
            </linearGradient>
          </defs>
          <path
            id="Vector"
            d="M52.31 31.39C53.61 31.39 54.66 30.34 54.66 29.04L54.66 15.43C54.66 10.8 50.89 7.03 46.25 7.03L44.93 7.03L44.93 2.34C44.93 1.04 43.88 0 42.58 0L12.07 0C10.77 0 9.72 1.04 9.72 2.34L9.72 7.03L8.4 7.03C3.77 7.03 0 10.8 0 15.43L0 42.04C0 46.67 3.77 50.44 8.4 50.44L17.66 50.44L17.66 55.31L11.65 55.31C10.36 55.31 9.31 56.36 9.31 57.65C9.31 58.95 10.36 60 11.65 60L43 60C44.29 60 45.34 58.95 45.34 57.65C45.34 56.36 44.29 55.31 43 55.31L37 55.31L37 50.44L46.25 50.44C50.89 50.44 54.66 46.67 54.66 42.04L54.66 40.76C54.66 39.47 53.61 38.42 52.31 38.42C51.02 38.42 49.97 39.47 49.97 40.76L49.97 42.04C49.97 44.09 48.3 45.75 46.25 45.75L8.4 45.75C6.35 45.75 4.68 44.09 4.68 42.04L4.68 15.43C4.68 13.38 6.35 11.71 8.4 11.71L9.72 11.71L9.72 38.3C9.72 39.59 10.77 40.64 12.07 40.64L42.58 40.64C43.88 40.64 44.93 39.59 44.93 38.3L44.93 11.71L46.25 11.71C48.3 11.71 49.97 13.38 49.97 15.43L49.97 29.04C49.97 30.34 51.02 31.39 52.31 31.39ZM32.31 50.44L32.31 55.31L22.34 55.31L22.34 50.44L32.31 50.44ZM40.24 35.95L14.41 35.95L14.41 4.68L40.24 4.68L40.24 35.95ZM19.05 11.42C19.05 10.12 20.1 9.07 21.39 9.07L33.26 9.07C34.55 9.07 35.6 10.12 35.6 11.42C35.6 12.71 34.55 13.76 33.26 13.76L21.39 13.76C20.1 13.76 19.05 12.71 19.05 11.42ZM21.39 31.26L33.26 31.26C34.55 31.26 35.6 30.21 35.6 28.92L35.6 20.32C35.6 19.02 34.55 17.97 33.26 17.97L21.39 17.97C20.1 17.97 19.05 19.02 19.05 20.32L19.05 28.92C19.05 30.21 20.1 31.26 21.39 31.26ZM23.74 22.66L30.91 22.66L30.91 26.58L23.74 26.58L23.74 22.66Z"
            fill="url(#paint_linear_1_1648_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      ),
      title: "Probation Period Support",
      description: "We're with you for your first 3-6 months on the job.",
    },
  ];
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
    }
  }
  return (
    <Container>
      <div className="bg-background py-5 md:py-12">
        <div className="mx-auto text-center">
          <h1 className="max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-2 md:mb-4">
            Why High Paid Jobs is your ticket to success
          </h1>
          <p className="text-[#5C5958] max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10">
            We share our special tools and techniques, and coach you one-on-one <br /> from the beginning to the placement with higher raise.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-10 mx-2 md:mx-auto">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="max-w-[377px] bg-foreground p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center"
              >
                <div className="mb-2 md:mb-6">{card.icon}</div>
                <h3 className="md:max-w-[270px] text-base md:text-2xl font-semibold text-black mb-2 text-center">
                  {card.title}
                </h3>
                <p className="max-w-[260px] text-[#5C5958] dark:text-gray text-xs md:text-sm text-center line-clamp-3 sm:line-clamp-none">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white md:font-medium py-1 pl-3 pr-2 rounded-full transition-colors text-xs md:text-lg font-semibold"
          >
            Book Free Consultation{" "}
            <ChevronRight className="-ml-2 mt-1 h-6 w-6 text-lg font-bold" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default TicketToSuccess;
