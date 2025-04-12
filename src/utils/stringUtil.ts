export const lineChange = (text: string): string[] => {
  return text
    .split(/\r?\n/)            // 1) 개행 기준으로 분할
    .map(line => line.trim())  // 2) 앞뒤 공백 제거
    .filter(line => line);     // 3) 빈 문자열 제거
}