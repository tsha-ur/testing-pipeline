import { ApplicationNode } from '@universal-robots/contribution-api';

export interface MyUrcapIdAppNode extends ApplicationNode {
  type: string;
  version: string;
}
