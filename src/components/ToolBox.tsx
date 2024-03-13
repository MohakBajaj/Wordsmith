export default function ToolBox({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
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
    const earlyCount = textarea.value.length;
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
        " to sum up everything that has been stated "
      )
      .replaceAll(
        " In conclusion ",
        " To sum up everything that has been stated "
      )
      .replaceAll(
        " In Conclusion ",
        " To sum up everything that has been stated "
      )
      .replaceAll(
        " IN CONCLUSION ",
        " TO SUM UP EVERYTHING THAT HAS BEEN STATED "
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
        " therefore elucidating the impression that "
      )
      .replaceAll(
        " this suggests ",
        " therefore elucidating the impression that "
      )
      .replaceAll(
        " This suggests ",
        " therefore elucidating the impression that "
      )
      .replaceAll(
        " THIS SUGGESTS ",
        " THEREFORE ELUCIDATING THE IMPRESSION THAT "
      )
      .replaceAll(" this means ", " this actively demonstrates that ")
      .replaceAll(" it means ", " it actively demonstrates that ")
      .replaceAll(
        " in conclusion to ",
        " to sum up everything that has been stated so far "
      )
      .replaceAll(
        " In conclusion to ",
        " To sum up everything that has been stated so far "
      )
      .replaceAll(" for ", " for the exact purpose of ")
      .replaceAll(" For ", " For the exact purpose of ");
    const finalCount = textarea.value.length;
    if (finalCount - earlyCount > 0) {
      alert(
        "Magic Spell [BETA] applied, " +
          (finalCount - earlyCount) +
          " Characters added, Use it only 1 time per article"
      );
    } else {
      alert("Unable to apply Magic Spell, Add more suitable content");
    }
  }
}
