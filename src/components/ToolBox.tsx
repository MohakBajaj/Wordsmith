
import { useState } from "react";
import Templates from "./Templates";

export default function ToolBox({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  const [isTemplateVisible, setIsTemplateVisible] = useState(false);
  function lowerCase() {
    setText(text.toLowerCase());
  }

  function upperCase() {
    setText(text.toUpperCase());
  }

  function clearText() {
    setText("");
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  }

  function capitalize() {
    let s = text;
    s = s.toLowerCase();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === ".") {
        if (i + 1 < s.length && s.charAt(i + 1) === " ") {
          if (i + 2 < s.length) {
            s =
              s.substring(0, i + 2) +
              s.charAt(i + 2).toUpperCase() +
              s.substring(i + 2 + 1);
          }
        }
      }
    }
    setText(s);
  }

  const morseCodeMap: { [key: string]: string } = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " / ",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
  };

  function textToMorseCode(text: string): string {
    let morseCode = "";
    for (let i = 0; i < text.length; i++) {
      const character = text[i].toLowerCase();
      if (morseCodeMap[character]) {
        morseCode += morseCodeMap[character] + " ";
      }
    }
    return morseCode;
  }

  function morseCodeToText(morseCode: string): string {
    const morseCodeMapReversed: { [key: string]: string } = {};
    for (const key in morseCodeMap) {
      morseCodeMapReversed[morseCodeMap[key]] = key;
    }

    let text = "";
    const words = morseCode.split(" / ");
    for (let i = 0; i < words.length; i++) {
      const characters = words[i].split(" ");
      for (let j = 0; j < characters.length; j++) {
        if (morseCodeMapReversed[characters[j]]) {
          text += morseCodeMapReversed[characters[j]];
        }
      }
      text += " ";
    }
    return text;
  }

  return (
    <>
      <div className="flex fixed flex-col md:flex-row flex-wrap bottom-0 p-6 pl-0 h-20 w-full max-w-full overflow-x-auto justify-start md:justify-center items-center bg-zinc-900 overflow-y-hidden select-none">
        {/* Magic Spell */}
        <div
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
          onClick={magicSpell}
          title="Add relevant characters to your text to make it even more longer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          Magic Spell
        </div>
        {/* Morse Code */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
          onClick={() => setText(textToMorseCode(text))}
          title="Convert text to Morse Code"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380.969 380.969"
            fill="currentColor"
            className="h-6 w-6"
            xmlSpace="preserve"
          >
            <circle cx="210.994" cy="79.094" r="9" />
            <circle cx="180.994" cy="79.094" r="9" />
            <circle cx="196.994" cy="130.427" r="9" />
            <path d="M207.996 97.094h36.5v15h-36.5zm-67.25 56.166h36.5v15h-36.5z" />
            <circle cx="226.994" cy="130.427" r="9" />
            <path d="M140.746 122.927h36.5v15h-36.5z" />
            <circle cx="150.996" cy="79.094" r="9" />
            <path d="M159.996 97.094h36.5v15h-36.5z" />
            <circle cx="120.996" cy="160.76" r="9" />
            <path d="M330.759 320.484c4.143 0 7.5-3.357 7.5-7.5v-9.382h35.21c4.143 0 7.5-3.357 7.5-7.5v-52.914c0-4.143-3.357-7.5-7.5-7.5h-11.588c-.142-4.019-3.434-7.233-7.486-7.233h-16.136v-20.851h16.136c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-47.269c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.133v20.851h-16.133c-4.053 0-7.345 3.215-7.486 7.233h-6.005v-34.961h-15v34.961H67.441l3.961-33.814h1.456c4.143 0 7.5-3.357 7.5-7.5v-18.557c0-4.143-3.357-7.5-7.5-7.5H7.5a7.5 7.5 0 0 0-7.5 7.5v18.557c0 4.143 3.357 7.5 7.5 7.5h1.455l4.586 39.155c.687 6.545 6.356 11.659 12.943 11.659h1.193v43.414c0 4.143 3.357 7.5 7.5 7.5h118.331v9.382c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.382h29.79v20.752H45.178c-9.649 0-17.5 7.851-17.5 17.5v15.195c0 4.143 3.357 7.5 7.5 7.5h338.291c4.143 0 7.5-3.357 7.5-7.5v-15.195c0-9.649-7.851-17.5-17.5-17.5h-69.834v-20.752h29.624v9.382c0 4.144 3.357 7.5 7.5 7.5m-93.46-53.963a2.337 2.337 0 0 1 2.334 2.334c0 1.287-1.047 2.334-2.334 2.334s-2.334-1.047-2.334-2.334a2.337 2.337 0 0 1 2.334-2.334m-24 15.001c0-4.393 1.638-10.74 3.983-15.438 5.608-11.231 9.385-12.287 11.626-12.386-5.326 2.961-8.943 8.642-8.943 15.156 0 9.558 7.776 17.334 17.334 17.334s17.334-7.776 17.334-17.334c0-6.515-3.617-12.195-8.943-15.156 2.241.099 6.018 1.154 11.626 12.386 2.346 4.697 3.983 11.045 3.983 15.438v42.832h-48zM15 186.874v-3.557h50.358v3.557zm15.091 50.814h-1.839l-4.194-35.814H56.3l-3.96 33.814H35.178c-1.966 0-3.75.763-5.087 2m12.587 50.915v-37.914h166.287c-1.744 2.482-3.437 5.358-5.103 8.695-3.38 6.769-5.563 15.458-5.563 22.139v7.08zm320.791 50.751c1.355 0 2.5 1.145 2.5 2.5v7.695H42.678v-7.695c0-1.355 1.145-2.5 2.5-2.5zm-87.17-15v-20.752h2.336v20.752zm0-35.751v-7.08c0-6.681-2.184-15.37-5.563-22.139-1.666-3.337-3.358-6.213-5.103-8.695h100.336v37.914z" />
            <path d="M171.135 222.406c13.653 0 26.89-2.635 39.409-7.84a72.2 72.2 0 0 0 34.702 8.869 72.2 72.2 0 0 0 23.391-3.891 7.5 7.5 0 0 0 4.984-5.942 7.5 7.5 0 0 0-2.94-7.177c-8.199-6.085-14.552-14.131-18.547-23.439a102.98 102.98 0 0 0 21.993-63.576c0-56.789-46.202-102.991-102.992-102.991-56.793 0-102.998 46.202-102.998 102.991 0 56.792 46.205 102.996 102.998 102.996m0-190.987c48.52 0 87.992 39.473 87.992 87.991a87.98 87.98 0 0 1-21.254 57.31 7.5 7.5 0 0 0-1.397 7.351 72.2 72.2 0 0 0 14.068 24.12 57 57 0 0 1-5.298.245 57.2 57.2 0 0 1-30.254-8.636 7.5 7.5 0 0 0-7.102-.445c-11.595 5.342-23.961 8.051-36.756 8.051-48.522 0-87.998-39.475-87.998-87.996.001-48.518 39.476-87.991 87.999-87.991" />
            <circle cx="120.996" cy="79.094" r="9" />
            <path d="M111.996 97.094h36.5v15h-36.5z" />
            <circle cx="120.996" cy="130.427" r="9" />
          </svg>
          Morse Code
        </div>
        {/* Morse Code to text */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
          onClick={() => setText(morseCodeToText(text))}
          title="Convert Morse Code to text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001"
            xmlSpace="preserve"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M417.134 0H94.869C51.442 0 16.111 35.33 16.111 78.757V347.25c0 43.426 35.331 78.757 78.757 78.757h53.384l94.453 81.071c7.649 6.565 18.945 6.564 26.592 0l94.452-81.071h53.383c43.426 0 78.757-35.331 78.757-78.757V78.757C495.891 35.33 460.56 0 417.134 0M256.002 464.683l-45.061-38.676h90.121zm199.06-117.435c0 20.913-17.015 37.928-37.928 37.928H94.869c-20.913 0-37.928-17.014-37.928-37.928V78.757c-.001-20.914 17.014-37.928 37.928-37.928h322.265c20.913 0 37.928 17.014 37.928 37.928z" />
            <path d="M391.114 105.445H255.997c-11.274 0-20.415 9.14-20.415 20.415s9.14 20.415 20.415 20.415h135.117c11.274 0 20.415-9.14 20.415-20.415-.001-11.277-9.14-20.415-20.415-20.415m-272.231 40.724c1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306 0-10.269-7.656-19.193-18.4-20.319a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.133 7.625 19.21 18.414 20.306m137.122 133.564H120.889c-11.274 0-20.415 9.14-20.415 20.415s9.14 20.415 20.415 20.415h135.117c11.274 0 20.415-9.14 20.415-20.415s-9.142-20.415-20.416-20.415m-69.558-133.564c1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306 0-10.269-7.656-19.193-18.4-20.319a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319-.001 10.133 7.625 19.21 18.414 20.306m-67.564 87.144c1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306 0-10.269-7.656-19.193-18.4-20.319a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.132 7.625 19.21 18.414 20.306m139.132 0c10.674-1.109 18.4-9.98 18.4-20.306 0-10.269-7.656-19.193-18.4-20.319a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.133 7.626 19.21 18.414 20.306 1.425.144 2.588.145 4.015 0m135.111-40.626a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.133 7.626 19.21 18.414 20.306 1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306.001-10.268-7.655-19.192-18.4-20.319m0 87.144a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.132 7.626 19.21 18.414 20.306 1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306.001-10.267-7.655-19.192-18.4-20.319m-67.062 0a20 20 0 0 0-4.015 0c-10.798 1.108-18.414 10.184-18.414 20.319 0 10.132 7.626 19.21 18.414 20.306 1.425.144 2.587.146 4.015 0 10.674-1.109 18.4-9.98 18.4-20.306.001-10.267-7.655-19.192-18.4-20.319" />
          </svg>
          MC to text
        </div>
        {/* Lowercase */}
        <div
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
          onClick={lowerCase}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
          lowercase
        </div>
        {/* Uppercase */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
          onClick={upperCase}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          UPPERCASE
        </div>
        {/* Capitalize */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
          onClick={capitalize}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
          </svg>
          Capitalize
        </div>
        {/* Copy text */}
        <div
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
          onClick={copyText}
        >
          <p>📋</p>
          Copy Text
        </div>
        {/* Clear Text */}
        <div
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
          onClick={clearText}
        >
          <p>❌</p>
          Clear Text
        </div>
        {/* Templates */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer h-max"
          onClick={() => setIsTemplateVisible(!isTemplateVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          Templates
        </div>
        {isTemplateVisible && (
          <Templates
            setText={setText}
            onClose={() => setIsTemplateVisible(false)}
          />
        )}
        <a
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer"
          href="https://github.com/MohakBajaj/Wordsmith.git"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="-0.5 -1 17 17"
            stroke="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Contribute
        </a>
      </div>
    </>
  );
}
// Warning Non - DRY code
function magicSpell() {
  const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
  let earlyCount = textarea ? textarea.value.length : 0;
  if (textarea) {
    textarea.value = textarea.value
      .replaceAll(" good ", " outstanding ")
      .replaceAll(" Good ", " Outstanding ")
      .replaceAll(" GOOD ", " OUTSTANDING ")
      .replaceAll(" new ", " latest ")
      .replaceAll(" New ", " Latest ")
      .replaceAll(" NEW ", " LATEST ")
      .replaceAll(" this means ", " this actively illustrates that  ")
      .replaceAll(" This means ", " This actively illustrates that ")
      .replaceAll(" THIS MEANS ", " THIS ACTIVELY ILLUSTRATES THAT ")
      .replaceAll(" because ", " the reason for this ")
      .replaceAll(" Because ", " The reason for this ")
      .replaceAll(" BECAUSE ", " THE REASON FOR THIS ")
      .replaceAll(" so ", " thus, the conclusion is that ")
      .replaceAll(" So ", " Thus, the conclusion is that ")
      .replaceAll(" SO ", " THUS, THE CONCLUSION IS THAT ")
      .replaceAll(" and ", " as well as ")
      .replaceAll(" And ", " As well as ")
      .replaceAll(" AND ", " AS WELL AS ")
      .replaceAll(" linking ", " bridging the gap ")
      .replaceAll(" Linking ", " Bridging the gap ")
      .replaceAll(" LINKING ", " BRIDGING THE GAP ")
      .replaceAll(
        " in conclusion ",
        " to sum up everything that has been stated ",
      )
      .replaceAll(
        " In conclusion ",
        " To sum up everything that has been stated ",
      )
      .replaceAll(
        " In Conclusion ",
        " To sum up everything that has been stated ",
      )
      .replaceAll(
        " IN CONCLUSION ",
        " TO SUM UP EVERYTHING THAT HAS BEEN STATED ",
      )
      .replaceAll(" also ", " in addition to this ")
      .replaceAll(" Also ", " In addition to this ")
      .replaceAll(" ALSO ", " IN ADDITION TO THIS ")
      .replaceAll(" yet ", " on the other hand ")
      .replaceAll(" Yet ", " On the other hand ")
      .replaceAll(" YET ", " ON THE OTHER HAND ")
      .replaceAll(" about ", " in regards to ")
      .replaceAll(" About ", " In regards to ")
      .replaceAll(" ABOUT ", " IN REGARDS TO ")
      .replaceAll(" even though ", " be that as it may ")
      .replaceAll(" Even though ", " Be that as it may ")
      .replaceAll(" EVEN THOUGH ", " BE THAT AS IT MAY ")
      .replaceAll(" until ", " until such time as ")
      .replaceAll(" Until ", " Until such time as ")
      .replaceAll(" UNTIL ", " UNTIL SUCH TIME AS ")
      .replaceAll(
        " this suggest ",
        " therefore elucidating the impression that ",
      )
      .replaceAll(
        " this suggests ",
        " therefore elucidating the impression that ",
      )
      .replaceAll(
        " This suggests ",
        " therefore elucidating the impression that ",
      )
      .replaceAll(
        " THIS SUGGESTS ",
        " THEREFORE ELUCIDATING THE IMPRESSION THAT ",
      )
      .replaceAll(" this means ", " this actively demonstrates that ")
      .replaceAll(" it means ", " it actively demonstrates that ")
      .replaceAll(
        " in conclusion to ",
        " to sum up everything that has been stated so far ",
      )
      .replaceAll(
        " In conclusion to ",
        " To sum up everything that has been stated so far ",
      )
      .replaceAll(" for ", " for the exact purpose of ")
      .replaceAll(" For ", " For the exact purpose of ");
    const finalCount = textarea.value.length;
    if (finalCount - earlyCount > 0) {
      alert(
        "Magic Spell [BETA] applied, " +
          (finalCount - earlyCount) +
          " Characters added, Use it only 1 time per article",
      );
    } else {
      alert("Unable to apply Magic Spell, Add more suitable content");
}
}
}
