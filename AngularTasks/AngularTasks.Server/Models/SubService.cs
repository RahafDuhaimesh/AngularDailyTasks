using System;
using System.Collections.Generic;

namespace AngularTasks.Server.Models;

public partial class SubService
{
    public int SubServiceId { get; set; }

    public string? SubServiceName { get; set; }

    public string? SubServiceDescription { get; set; }

    public string? SubServiceImage { get; set; }

    public int? ServiceId { get; set; }

    public virtual Service? Service { get; set; }

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
