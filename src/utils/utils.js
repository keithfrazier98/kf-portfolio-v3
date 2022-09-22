export function parseLanguageData(data, setState) {
  const langCount = {};
  const langColor = {};
  const langPerc = {};
  if (data.length > 0) {
    data.forEach((repo) => {
      const langObject = repo.primaryLanguage;
      if (langObject) {
        const color = langObject.color;
        const name = langObject.name;
        if (langCount[name]) {
          langCount[name] = langCount[name] + 1;
        } else {
          langCount[name] = 1;
          langColor[name] = color;
        }
      }
    });

    let totalPerc = 0;
    for (let [language, value] of Object.entries(langCount)) {
      const percentage = (value / data.length) * 100;
      langPerc[language] = percentage;
      totalPerc += percentage;
    }

    return {
      colors: langColor,
      total: totalPerc,
      percentages: langPerc,
    };
  }
}

export function makeLanguageChart(languagePercent) {
  if (!languagePercent?.percentages) return;
  let elements = [];
  let totalPerc = 0;
  let totalLang = 0;

  for (let [language, percent] of Object.entries(languagePercent.percentages)) {
    totalPerc += percent;
    totalLang += 1;
  }

  const offset = (100 - totalPerc) / totalLang;

  for (let [language, percent] of Object.entries(languagePercent.percentages)) {
    elements.push(
      <div
        className={`h-full group relative overflow-visible`}
        key={"language_stat_" + language}
        style={{ backgroundColor: languagePercent.colors[language], width: `${percent + offset}%` }}
      >
        <div className="absolute overflow-visible -bottom-6 left-1/2 transform -translate-x-1/2 hidden opacity-0 group-hover:opacity-100 duration-300 transition-opacity group-hover:block z-30">
          <p className="w-max">
            {language} {Math.floor(percent)}%
          </p>
        </div>
      </div>
    );
  }

  return elements;
}
