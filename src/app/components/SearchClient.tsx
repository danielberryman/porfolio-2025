// "use client";

// import { useEffect, useState } from "react";
// import cosine from "compute-cosine-similarity";

// export const lifeAreas = [
//     "Spirituality",
//     "Physical health",
//     "Relationships",
//     "Career",
//     "Creativity",
//     "Learning",
//     "Finances",
//     "Community",
//     "Joy",
//     "Parenting",
//     "Romance",
//     "Environment",
//     "Nutrition",
//     "Rest",
//     "Emotional wellbeing",
//     "Mental health",
//     "Purpose",
//     "Contribution",
//     "Adventure",
//     "Self-worth",
// ];

// type LifeAreaEmbedding = {
//   label: string;
//   embedding: number[];
// };

// const SearchClient = ({
//   placeholder = "Discover more about me...",
//   onSearch,
// }: {
//   placeholder?: string;
//   onSearch?: (value: string) => void;
// }) => {
//   const [embedder, setEmbedder] = useState<any>(null);
//   const [areaEmbeddings, setAreaEmbeddings] = useState<LifeAreaEmbedding[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [input, setInput] = useState<string>("");
//   const [matches, setMatches] = useState<{ label: string; score: number }[]>([]);

//   useEffect(() => {
//     async function load() {
//       const { pipeline } = await import("@xenova/transformers");

//       const pipe = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

//       const results = await Promise.all(
//         lifeAreas.map(async (label) => {
//           const output = await pipe(label, { pooling: "mean", normalize: true });
//           return { label, embedding: Array.from(output.data) };
//         })
//       );

//       setEmbedder(() => pipe);
//       setAreaEmbeddings(results);
//       setLoading(false);
//     }

//     load();
//   }, []);

//   const handleSearch = async () => {
//     if (!embedder || !areaEmbeddings) return;

//     const output = await embedder(input, {
//       pooling: "mean",
//       normalize: true,
//     });

//     const inputEmbedding = output.data;

//     const results = areaEmbeddings
//       .map((area) => ({
//         label: area.label,
//         score: cosine(area.embedding, inputEmbedding),
//       }))
//       .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
//       .slice(0, 5)
//       .map(result => ({
//         label: result.label,
//         score: result.score ?? 0
//       }));

//     setMatches(results);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSearch();
//       if (onSearch) onSearch(input);
//     }
//   };

//   const handleSelect = (label: string) => {
//     if (onSearch) onSearch(label);
//   };

//   return (
//     <div className="w-full flex justify-center py-8 px-4">
//       <div className="flex flex-col items-center gap-4 w-full max-w-md">
//         <input
//           type="text"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
//           placeholder={placeholder}
//           value={input}
//           onKeyDown={handleKeyDown}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         {!loading && matches.length > 0 && (
//           <ul className="w-full">
//             {matches.map((match) => (
//               <li
//                 key={match.label}
//                 className="cursor-pointer px-4 py-2 rounded hover:bg-blue-100 transition"
//                 onClick={() => handleSelect(match.label)}
//               >
//                 {match.label}
//               </li>
//             ))}
//           </ul>
//         )}
//         {loading && <p className="text-gray-500">Loading model...</p>}
//       </div>
//     </div>
//   );
// };

// export default SearchClient;
