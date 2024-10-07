using System;
using System.Collections.Generic;

namespace AngularTasks.Server.Models;

public partial class UserSubscription
{
    public int UserSubscriptionId { get; set; }

    public int? UserId { get; set; }

    public int? SubServiceId { get; set; }

    public int? ScriptionId { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public virtual Subscription? Scription { get; set; }

    public virtual SubService? SubService { get; set; }

    public virtual User? User { get; set; }
}
