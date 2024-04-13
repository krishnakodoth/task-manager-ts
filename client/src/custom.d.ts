//fix for import svg error
declare module '*.svg' {
    const content: string;
    export default content;
}
  