export function ePalindromo(str: string): boolean {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  