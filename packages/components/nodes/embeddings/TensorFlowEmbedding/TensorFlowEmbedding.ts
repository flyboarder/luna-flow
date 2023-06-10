import '@tensorflow/tfjs-node';
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { TensorFlowEmbeddings, TensorFlowEmbeddingsParams } from 'langchain/embeddings/tensorflow'

class TensorFlowEmbedding_Embeddings implements INode {
    label: string
    name: string
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    inputs: INodeParams[]

    constructor() {
        this.label = 'TensorFlow Embeddings'
        this.name = 'TensorFlowEmbeddings'
        this.type = 'TensorFlowEmbeddings'
        this.icon = 'tensorflow.png'
        this.category = 'Embeddings'
        this.description = 'TensorFlow API to generate embeddings for a given text'
        this.baseClasses = [this.type, ...getBaseClasses(TensorFlowEmbeddings)]
        this.inputs = [
            
        ]
    }

    async init(nodeData: INodeData): Promise<any> {
        // const TensorFlowApiKey = nodeData.inputs?.TensorFlowApiKey as string
        // const stripNewLines = nodeData.inputs?.stripNewLines as boolean
        // const batchSize = nodeData.inputs?.batchSize as string
        // const timeout = nodeData.inputs?.timeout as string
        // const maxRetries = nodeData.inputs?.maxRetries as string
        // const maxConcurrency = nodeData.inputs?.maxConcurrency as string

        const obj: Partial<TensorFlowEmbeddingsParams> = {
            
        }

        // if (stripNewLines) obj.stripNewLines = stripNewLines
        // if (batchSize) obj.batchSize = parseInt(batchSize, 10)
        // if (timeout) obj.timeout = parseInt(timeout, 10)
        // if (maxRetries) obj.maxRetries = parseInt(maxRetries, 10)
        // if (maxConcurrency) obj.maxConcurrency = parseInt(maxConcurrency, 5)

        console.log('[TensorFlowEmbeddings]: Initializing!')
        const model = new TensorFlowEmbeddings(obj)
        return model
    }
}

module.exports = { nodeClass: TensorFlowEmbedding_Embeddings }
