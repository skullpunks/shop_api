import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { RefundPolicy } from '../entities/refund-policies.entity';
export declare class RefundPolicyPaginator extends Paginator<RefundPolicy> {
    data: RefundPolicy[];
}
export declare class GetRefundPolicyDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
}
export declare enum QueryReviewsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    TITLE = "TITLE",
    DESCRIPTION = "DESCRIPTION"
}
