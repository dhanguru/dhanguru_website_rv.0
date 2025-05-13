declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    mirror?: boolean;
    easing?: string;
    [key: string]: any;
  }

  interface AosStatic {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
    // Add more methods if needed
  }

  const AOS: AosStatic;
  export default AOS;
}