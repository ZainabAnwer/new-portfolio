import React from "react";

export function JavaScriptIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 18.5V14.5C6.5 13.9477 6.94772 13.5 7.5 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V18.5M10.5 16.5H6.5"
        stroke="#000000"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "none" }}
      />
      <path
        d="M8.5 9.5V16.2C8.5 17.5 7.6 18.2 6.3 18.2C5.3 18.2 4.6 17.7 4.2 17L5.4 15.8C5.6 16.2 5.9 16.5 6.3 16.5C6.8 16.5 7.1 16.2 7.1 15.5V9.5H8.5ZM17.8 12.3C16.8 12.3 16 12.8 15.5 13.3L14.4 12.2C15.2 11.3 16.4 10.7 17.8 10.7C19.7 10.7 21 11.8 21 13.5C21 15.1 19.9 16 18.1 16.7C16.8 17.2 16.3 17.6 16.3 18.3C16.3 19 16.9 19.5 17.9 19.5C18.8 19.5 19.6 19.1 20.2 18.4L21.3 19.6C20.4 20.7 19.2 21.2 17.8 21.2C15.8 21.2 14.6 20 14.6 18.3C14.6 16.6 15.8 15.7 17.5 15.1C18.8 14.6 19.3 14.2 19.3 13.5C19.3 12.8 18.7 12.3 17.8 12.3Z"
        fill="#000000"
        transform="translate(1, -1.5)"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TailwindIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.2 8.5H5.8V10.2H7.6V18H9.4V10.2H11.2V8.5ZM17.8 12.3C16.8 12.3 16 12.8 15.5 13.3L14.4 12.2C15.2 11.3 16.4 10.7 17.8 10.7C19.7 10.7 21 11.8 21 13.5C21 15.1 19.9 16 18.1 16.7C16.8 17.2 16.3 17.6 16.3 18.3C16.3 19 16.9 19.5 17.9 19.5C18.8 19.5 19.6 19.1 20.2 18.4L21.3 19.6C20.4 20.7 19.2 21.2 17.8 21.2C15.8 21.2 14.6 20 14.6 18.3C14.6 16.6 15.8 15.7 17.5 15.1C18.8 14.6 19.3 14.2 19.3 13.5C19.3 12.8 18.7 12.3 17.8 12.3Z"
        fill="#FFFFFF"
        transform="translate(0, -1)"
      />
    </svg>
  );
}

export function NodeJsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z"
        fill="#5FA04E"
      />
      <path
        d="M12 4.5L18.5 8.3V15.7L12 19.5L5.5 15.7V8.3L12 4.5Z"
        fill="#333333"
      />
      <path
        d="M12 7.5L16 9.8V14.2L12 16.5L8 14.2V9.8L12 7.5Z"
        fill="#5FA04E"
      />
    </svg>
  );
}

export function ExpressJsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#1E293B" />
      <text
        x="50%"
        y="62%"
        textAnchor="middle"
        fill="#38BDF8"
        fontSize="9.5"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        ex
      </text>
    </svg>
  );
}

export function MongoDbIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.5C11.5 3 7 7.5 7 13.5C7 17.5 9.2 21 12 22.5C14.8 21 17 17.5 17 13.5C17 7.5 12.5 3 12 1.5Z"
        fill="#47A248"
      />
      <path
        d="M12 1.5V22.5C14.8 21 17 17.5 17 13.5C17 7.5 12.5 3 12 1.5Z"
        fill="#499D4A"
      />
      <path
        d="M12 22.5V14.5C12 14.5 12.8 14.8 13.5 14C14.2 13.2 14.5 12 14.5 12C15.2 14.5 14 18.5 12 22.5Z"
        fill="#FFFFFF"
        opacity="0.3"
      />
    </svg>
  );
}

export function MySqlIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#00758F" />
      <path
        d="M6 16C7.5 12 9.5 9 12 8C14.5 7 17.5 8 18 10C17 10 16 11.5 15.5 12C15 12.5 15 13.5 16 14C15 14.5 14 14.5 13 14C12.5 14 12 13.5 12 12C11 12 10.5 13 10.5 14C10.5 15 11.5 15.5 12.5 15.5C13 15.5 13.5 15.3 14 15C13.5 16.5 11.5 17.5 9 17C7.5 16.7 6.8 16.3 6 16Z"
        fill="#F29111"
      />
      <circle cx="16.5" cy="9.5" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export function FirebaseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 18.5L6.5 4.5L10 11.5L4.5 18.5Z"
        fill="#FFA000"
      />
      <path
        d="M12 2L10 11.5L4.5 18.5L12 23L19.5 18.5L12 2Z"
        fill="#F57C00"
      />
      <path
        d="M17.5 7.5L12 2L19.5 18.5L17.5 7.5Z"
        fill="#FFCA28"
      />
      <path
        d="M4.5 18.5L12 23L19.5 18.5L12 14L4.5 18.5Z"
        fill="#FFA000"
        opacity="0.6"
      />
    </svg>
  );
}

export function PythonIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8 2C8.2 2 8.4 3.5 8.4 3.5L8.4 5.2H12.1V5.7H5.2C5.2 5.7 2 5.3 2 9C2 12.7 4.8 12.5 4.8 12.5H6.4V10.8C6.4 8.9 8 8.8 8 8.8H12C13.8 8.8 13.9 7.2 13.9 7.2V3.7C13.9 3.7 14.1 2 11.8 2ZM9.9 3.2C10.4 3.2 10.8 3.6 10.8 4.1C10.8 4.6 10.4 5 9.9 5C9.4 5 9 4.6 9 4.1C9 3.6 9.4 3.2 9.9 3.2Z"
        fill="#3776AB"
      />
      <path
        d="M12.2 22C15.8 22 15.6 20.5 15.6 20.5V18.8H11.9V18.3H18.8C18.8 18.3 22 18.7 22 15C22 11.3 19.2 11.5 19.2 11.5H17.6V13.2C17.6 15.1 16 15.2 16 15.2H12C10.2 15.2 10.1 16.8 10.1 16.8V20.3C10.1 20.3 9.9 22 12.2 22ZM14.1 20.8C13.6 20.8 13.2 20.4 13.2 19.9C13.2 19.4 13.6 19 14.1 19C14.6 19 15 19.4 15 19.9C15 20.4 14.6 20.8 14.1 20.8Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function PythonLibIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#13293D" />
      <circle cx="7" cy="8" r="2.5" fill="#4B8BBE" />
      <circle cx="17" cy="8" r="2.5" fill="#FFD43B" />
      <circle cx="12" cy="16" r="3" fill="#306998" />
      <path d="M7 8L12 16M17 8L12 16M7 8H17" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

export function DartIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13.5L10.5 20H17L5.5 8.5L4 13.5Z" fill="#0175C2" />
      <path d="M10.5 4L4 10.5L8.5 15L17 6.5H10.5V4Z" fill="#02569B" />
      <path d="M17 6.5L12 11.5L15.5 15H20L17 6.5Z" fill="#29B6F6" />
      <path d="M10.5 20L15.5 15L12 11.5L7 16.5L10.5 20Z" fill="#00B0FF" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 2.5L3.5 12.5L6.5 15.5L19.5 2.5H13.5Z" fill="#42A5F5" />
      <path d="M13.5 13.5L8 19L11 22L19.5 13.5H13.5Z" fill="#0D47A1" />
      <path d="M10.5 16.5L8 19L13.5 22H19.5L14 16.5H10.5Z" fill="#1E88E5" />
    </svg>
  );
}

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function GitIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F05032" />
      <path
        d="M18.8 10.7L13.3 5.2C12.9 4.8 12.3 4.8 11.9 5.2L10.3 6.8L12.3 8.8C12.8 8.6 13.4 8.7 13.8 9.1C14.2 9.5 14.3 10.1 14.1 10.6L16.1 12.6C16.6 12.4 17.2 12.5 17.6 12.9C18.1 13.4 18.1 14.2 17.6 14.7C17.1 15.2 16.3 15.2 15.8 14.7C15.4 14.3 15.3 13.7 15.5 13.2L13.6 11.3V15.7C13.8 15.9 13.9 16.2 13.9 16.5C13.9 17.3 13.3 17.9 12.5 17.9C11.7 17.9 11.1 17.3 11.1 16.5C11.1 15.9 11.5 15.4 12.1 15.2V10.7C11.5 10.5 11.1 10 11.1 9.4C11.1 9.1 11.2 8.8 11.4 8.6L9.4 6.6L5.2 10.8C4.8 11.2 4.8 11.8 5.2 12.2L10.7 17.7C11.1 18.1 11.7 18.1 12.1 17.7L18.8 11.9C19.2 11.5 19.2 10.9 18.8 10.7Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JiraIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#0052CC" />
      <path
        d="M11.5 6H7.5C6.7 6 6 6.7 6 7.5V11.5L11.5 6Z"
        fill="#2684FF"
      />
      <path
        d="M17.5 12H13.5L8 17.5V17.5C8 18.3 8.7 19 9.5 19H13.5C14.3 19 15 18.3 15 17.5V13.5L17.5 12Z"
        fill="#2684FF"
      />
      <path
        d="M12 11.5L6.5 17C6.2 17.3 6 17.7 6 18.1V18.1C6 18.6 6.4 19 6.9 19H7.5L13.5 13L12 11.5Z"
        fill="#0052CC"
      />
      <path
        d="M12 6.5V11.5L17.5 6H13.5C12.7 6 12 6.7 12 7.5V6.5Z"
        fill="#0052CC"
      />
    </svg>
  );
}
