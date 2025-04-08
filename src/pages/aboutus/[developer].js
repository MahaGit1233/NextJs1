import { useRouter } from "next/router";

const dummyDetails = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function developerPage() {
  const router = useRouter();
  const path = router.query.developer;
  const developer = dummyDetails.find((dev) => dev.id === Number(path));

  return (
    <div>
      {developer ? (
        <div>
          <h1>{developer.name}:</h1> <p>{developer.role}</p>
        </div>
      ) : (
        <h1>Developer dosen't exist</h1>
      )}
    </div>
  );
}

export default developerPage;
