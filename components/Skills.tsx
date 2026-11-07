import type { SkillCategory } from "@/data/skills";
import { experienceDays, formatExperience, type Locale } from "@/lib/duration";
import type { Dictionary } from "@/locales/ja";
import { SectionHeading } from "./SectionHeading";

type Props = { t: Dictionary["skills"]; categories: SkillCategory[]; locale: Locale; now: Date };

export function Skills({ t, categories, locale, now }: Props) {
  const groups = categories.map((category) => ({
    key: category.key,
    skills: category.skills
      .map((skill) => ({ name: skill.name, days: experienceDays(skill.experience, now) }))
      .sort((a, b) => b.days - a.days),
  }));
  const maxDays = Math.max(...groups.flatMap((g) => g.skills.map((s) => s.days)), 1);

  return (
    <section id="skills" className="border-t border-border bg-page-bg">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-[72px] sm:px-8 sm:py-[120px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label={t.label} heading={t.heading} />
          <p className="m-0 inline-flex items-center gap-2.5 text-sm text-text-3">
            <span aria-hidden="true" className="inline-block h-1.5 w-7 rounded-[3px] bg-accent" />
            {t.legend}
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-6">
          {groups.map((group) => (
            <div
              key={group.key}
              className="flex min-w-0 flex-[1_1_480px] flex-col gap-5 rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="m-0 text-xl font-bold">{t.categories[group.key]}</h3>
                <span className="font-mono text-[13px] text-text-3">{t.count(group.skills.length)}</span>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th scope="col" className="border-b border-border-2 pb-2 text-left text-xs font-medium text-text-3">
                      {t.skill}
                    </th>
                    <th scope="col" className="border-b border-border-2 pb-2 text-right text-xs font-medium text-text-3">
                      {t.experience}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.skills.map((skill) => (
                    <tr key={skill.name}>
                      <td className="border-b border-border py-3 pr-4 align-middle">
                        <div className="flex flex-col gap-2">
                          <span className="font-display text-base font-semibold leading-[1.3]">{skill.name}</span>
                          <span aria-hidden="true" className="block h-1.5 overflow-hidden rounded-[3px] bg-border">
                            <span
                              className="block h-full rounded-[3px] bg-accent"
                              style={{ width: `${Math.max(2, (skill.days / maxDays) * 100).toFixed(1)}%` }}
                            />
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap border-b border-border py-3 text-right align-middle font-mono text-sm text-text-2">
                        {formatExperience(skill.days, locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
