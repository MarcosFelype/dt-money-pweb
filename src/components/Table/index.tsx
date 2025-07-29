import { ITransaction } from "@/types/transaction";
import { formatCurrency, formatDate } from "@/utils";

export interface ITableProps {
    data: ITransaction[],
    openDeletModal: () => void;
}

export function Table({data, openDeletModal}: ITableProps) {   

    return (  
        <>     
        <table className="w-full mt-16 border-0 border-separate border-spacing-y-2 ">
        <thead>
            <tr>
                <th className="px-4 text-left text-table-header text-base font-medium">Título</th>
                <th className="px-4 text-left text-table-header text-base font-medium">Preço</th>
                <th className="px-4 text-left text-table-header text-base font-medium">Categoria</th>
                <th className="px-4 text-left text-table-header text-base font-medium">Data</th>                                   
            </tr>
        </thead>
        <tbody>
            {data.map((transaction, index) => (
                <tr key={index} className="bg-white h-16 rounded-lg">
                    <td className="px-4 py-4 whitespace-nowrap text-title">{transaction.title}</td>
                    <td className={`px-4 py-4 whitespace-nowrap text-right ${transaction.type === 'INCOME'? "text-income" : "text-outcome"}`}>{formatCurrency(transaction.price)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-table">{transaction.category}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-table">{transaction.data ? formatDate(new Date(transaction.data)) : ''}
                    </td>
                    <td><button onClick={() => alert('Olá')}>ATUALIZAR</button></td>
                    <td>
                        <button onClick={() => openDeletModal}  className="bg-button text-white px-8 py-3 rounded-md hover:opacity-80"> REMOVER </button> 
                    </td>                             
                </tr>
            ))}
        </tbody>
    </table>    
    </> 
    )
}
