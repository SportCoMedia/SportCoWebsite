const stats = [
    { name: 'HS Players', stat: '71,897' },
    { name: 'College Coaches', stat: '5,816' },
    { name: 'Universities', stat: '2,457' },
  ]
  
  export default function Stats() {
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-3">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Example Stats</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }