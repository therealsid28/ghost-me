const skills = [
  { id: "ts", content: "TypeScript" },
  { id: "react", content: "React" },
  { id: "next", content: "Next.js" },
  { id: "node", content: "Node.js" },
  { id: "python", content: "Python" },
  { id: "supabase", content: "Supabase" },
  { id: "sql", content: "SQL" },
  { id: "docker", content: "Docker" },
  { id: "mongodb", content: "MongoBD" },
  { id: "git", content: "Git" },
  { id: "solidworks", content: "SolidWorks" },
  { id: "agenticai", content: "AgenticAI" },
  { id: "fastapi", content: "FastAPI" },
  { id: "graphql", content: "GraphQL" },
  { id: "redis", content: "Redis" },
  { id: "autocad", content: "AutoCAD" },
  { id: "ansys", content: "Ansys" },
  { id: "langchain", content: "LangChain" },
  { id: "langgraph", content: "LangGraph" },
  { id: "pytorch", content: "PyTorch" },
];

export function SkillsSection() {
  return (
    <section className=" w-full max-w-7xl mx-auto">
      {/* <h2 className="font-heading text-2xl font-bold uppercase tracking-wider mb-6 underline underline-offset-5">
        Skills
      </h2> */}
      <div className="grid grid-cols-5 gap-12 w-full">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="rounded-md text-3xl text-muted-foreground text-center hover:text-foreground cursor-pointer"
          >
            {skill.content}
          </span>
        ))}
      </div>
    </section>
  );
}
