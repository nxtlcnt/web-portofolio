import { work } from "./data";

export default function Work() {
  return (
    <div className="flex flex-col gap-8 text-primary px-5 lg:px-0">
      {work.map((item, index) => (
        <div key={index}>
          <h3 className="text-lg mb-2 font-medium leading-loose text-secondary md:text-xl">
            {item.title}
            <span className="text-lg font-bold text-blue-200 hover:text-blue-300 focus:text-blue-300 mb-2 leading-loose text-secondary md:text-xl">
              {" "}
              @
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline font-bold text-blue-200 hover:text-blue-300 focus:text-blue-300"
              >
                {item.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{item.date}</p>
          {Array.isArray(item.description) ? (
            <ul className="list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed lg:text-base">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
