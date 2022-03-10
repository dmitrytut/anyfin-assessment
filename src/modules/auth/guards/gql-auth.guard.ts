import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * Guard to check authentication for graphql requests.
 */
@Injectable()
export class GraphqlJwtAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
