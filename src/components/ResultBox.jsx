function ResultBox({ result }) {

  if (!result) return null

  return (
    <div className="bg-white p-4 mt-6 rounded shadow">

      <h2 className="font-bold mb-2">
        Detection Result
      </h2>

      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>

    </div>
  )
}

export default ResultBox